require 'json'
require 'tomlrb'
require 'kramdown'
require 'fileutils'

REPOS = {}

def get_url(item)
    name , path, lines = item.split(":")
    log = `git -C repos/#{name} log -1 --oneline`
    sha = log[0..6]
    value = REPOS[name]
    url = value["repo"]+"/blob/"+sha+"/"+path+".md?plain=1"
    if lines
        unless lines.include?("-")
            url = url + "#L" + lines
        else
            start, eof = lines.split("-")
            url = url + "#L" + start + "-L" + eof
        end
    end
    return url
end

def move_image(name, path, md)
    html = Kramdown::Document.new(md).to_html
    html.scan(/\<img.+\>/).each do |str|
        str.scan(/src=\"(\S+)\"/).each do |srcs|
            srcs.each do |src|
                source =  File.expand_path("./repos/#{name}/#{path.split("/")[0..-2].join("/")}/#{src}")
                if File.exists? source
                    dist = File.expand_path("./src/#{src}")
                    dist_dir = File.expand_path("src/"+src.split("/")[0..-2].join("/"))
                    `mkdir -p #{dist_dir}` unless Dir.exists?(dist_dir)
                    FileUtils.copy(source, dist)
                end
            end
        end
    end
end

def replace_citation(content)
    citation_index = 0
    citation_list = ""
    content.gsub!(/\(\(.*\)\)/) do |item|
        item = item[2..-3]
        name , path, lines = item.split(":")
        md = File.read("./repos/#{name}/#{path}.md")
        if lines
            unless lines.include?("-")
                md = md.split("\n")[lines.to_i-1]
            else
                start, eof = lines.split("-")
                md = md.split("\n")[start.to_i-1, eof.to_i-1].join("\n")
            end
        end
        move_image(name, path, md)
        citation_index += 1
        citation_list = citation_list + "[^#{citation_index}]: [#{item}](#{get_url(item)})\n\n"
        md + "[^#{citation_index}]"
    end
    content = content + "\n---\n" + citation_list
    return content
end

def list_chapter(arr)
    arr.each do |item|
        chapter = item["Chapter"]
        chapter["content"] = replace_citation(chapter["content"])
        if File.exists?("./src/"+chapter["path"])
            File.write("./src/"+chapter["path"], chapter["content"])
        end
        if chapter["sub_items"]
            list_chapter(chapter["sub_items"])
        end
    end
end

if ARGV.size > 0
    if ARGV[0]=="supports"
        exit()
    end
end

`mkdir repos` unless Dir.exists?("./repos")
obj = Tomlrb.load_file("book.toml")
obj["citation"].each do |key, value|
    STDERR.puts key
    REPOS[key] = value
    unless Dir.exists?("./repos/#{key}")
        `git clone -b #{value["branch"]} #{value["repo"]} repos/#{key}`
    else
        `git -C repos/#{key} checkout #{value["branch"]}`
        `git -C repos/#{key} pull`
    end
    if value["ref"]
        `git -C repos/#{key} checkout #{value["ref"]}`
    end
end

str = STDIN.read
context, book = JSON.parse(str)
list_chapter(book["sections"])
STDOUT.puts JSON.dump(book)