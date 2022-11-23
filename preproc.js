module.exports = (markdown, options) => {
    return new Promise((resolve, reject) => {
      var rnd = 0;
      var is_open = false;
      return resolve(
        markdown
          .split('\n')
          .map((line, index) => {
            if(line=="```echarts"){
                is_open = true;
                rnd = Math.ceil(Math.random()*1000000);
                line = "<div id=\"chart_"+rnd+"\" style=\"width: 600px;height:400px;\"></div>\n\
                <script>\n\
                document.addEventListener('DOMContentLoaded', function() {\n\
                    var mychart_"+rnd+" = echarts.init(document.getElementById('chart_"+rnd+"'));\n\
                    var option = {\n";
                return line
            }
            if(line=="```"){
                line = "mychart_"+rnd+".setOption(option);\n\
                });\n\
                </script>";
                return line;
            }
            if(line.trim()=="{" && is_open == true){
                is_open = false;
                return "";
            } else {
                return line;
            }
          })
          .join('\n')
      );
    });
  };