const path = require('path');
const _ = require('lodash');
const { md, parseYamlFrontMatter } = require('./util');
const fs = require('fs-extra');
const Mustache = require('mustache');
const defaults = require('./defaults.json');
const {
  getInitialDir,
  getTemplate,
  getPreprocessor,
  getSlideOptions,
  getRevealOptions,
  getThemeUrl,
  getHighlightThemeUrl,
  getScriptPaths,
  getCssPaths,
  getWatch
} = require('./config');

const slidifyProps = ['attributes', 'notesSeparator', 'separator', 'verticalSeparator'];
const getSlidifyOptions = context => _.pick(context, slidifyProps);

const slidify = (markdown, slidifyOptions = _.pick(defaults, slidifyProps)) => {
  var options = slidifyOptions;
  var separatorRegex = new RegExp(options.separator + (options.verticalSeparator ? '|' + options.verticalSeparator : ''), 'mg');
  var horizontalSeparatorRegex = new RegExp(options.separator);
  var matches,
    lastIndex = 0,
    isHorizontal,
    wasHorizontal = true,
    content,
    sectionStack = [];
  while (matches = separatorRegex.exec(markdown)) {
    var notes = null;

    // determine direction (horizontal by default)
    isHorizontal = horizontalSeparatorRegex.test(matches[0]);

    if (!isHorizontal && wasHorizontal) {
      // create vertical stack
      sectionStack.push([]);
    }

    // pluck slide content from markdown input
    content = markdown.substring(lastIndex, matches.index);

    if (isHorizontal && wasHorizontal) {
      // add to horizontal stack
      sectionStack.push(content);
    }
    else {
      // add to vertical stack
      sectionStack[sectionStack.length - 1].push(content);
    }

    lastIndex = separatorRegex.lastIndex;
    wasHorizontal = isHorizontal;
  }
  ( wasHorizontal ? sectionStack : sectionStack[sectionStack.length-1] ).push( markdown.substring( lastIndex ) );
  var markdownSections = '';

  // flatten the hierarchical stack, and insert <section data-markdown> tags
  for( var i = 0, len = sectionStack.length; i < len; i++ ) {
    // vertical
    if( sectionStack[i] instanceof Array ) {
      markdownSections += '<section '+ options.attributes +'>';

      sectionStack[i].forEach( function( child ) {
        if(child.includes("<!-- html -->")){
          markdownSections += '<section '+ options.attributes +'>' + child + '</section>';
        } else {
          markdownSections += md.slidify(child, slidifyOptions);          
        }        
      } );
      markdownSections += '</section>';
    } else {
      if(sectionStack[i].includes("<!-- html -->")){
        markdownSections += '<section '+ options.attributes +'>' + sectionStack[i] + '</section>';
      } else {
        markdownSections += md.slidify(sectionStack[i], options);
      }      
    }
  }

  return markdownSections;  
};

const render = async (input, extraOptions = {}) => {
  const { yamlOptions, markdown } = parseYamlFrontMatter(input);
  const options = Object.assign(getSlideOptions(yamlOptions), extraOptions);

  const { title } = options;
  const themeUrl = getThemeUrl(options.theme, options.base);
  const highlightThemeUrl = getHighlightThemeUrl(options.highlightTheme);
  const revealOptions = Object.assign({}, getRevealOptions(options.revealOptions), yamlOptions.revealOptions);
  const scriptPaths = getScriptPaths(options.scripts, options.assetsDir, options.base);
  const cssPaths = getCssPaths(options.css, options.assetsDir, options.base);

  const preprocessorFn = getPreprocessor(options.preprocessor);
  const processedMarkdown = await preprocessorFn(markdown, options);

  const slides = slidify(processedMarkdown, getSlidifyOptions(options));

  const context = Object.assign(options, {
    title,
    slides,
    themeUrl,
    highlightThemeUrl,
    scriptPaths,
    cssPaths,
    revealOptionsStr: JSON.stringify(revealOptions),
    watch: getWatch()
  });

  const template = await getTemplate(options.template);

  return Mustache.render(template, context);
};

const renderFile = async (filePath, extraOptions) => {
  try {
    const content = await fs.readFile(filePath);
    return render(content.toString(), extraOptions);
  } catch (e) {
    return render("File not found.", extraOptions)
  }
};

function sanitize(entry) {
  if (entry.includes("..")) {
    entry = sanitize(entry.replace("..", ""))
  }
  return entry
}

module.exports = async (req, res) => {
  const dir = await getInitialDir();
  const filePath = path.join(dir, sanitize(decodeURIComponent(req.url)).replace(/\?.*/, ''));
  const markup = await renderFile(filePath);
  res.send(markup);
};

module.exports.slidify = slidify;
module.exports.render = render;
module.exports.renderFile = renderFile;
