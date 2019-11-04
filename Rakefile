require "rubygems"
require "tmpdir"
require "bundler/setup"
require "jekyll"

# Indiquez le nom de votre dépôt
GITHUB_REPONAME = "USERNAME/USERNAME.github.io"
#
desc "Generating files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end

desc "Generate and publish"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    cp_r "_site/.", tmp

    pwd = Dir.pwd
    Dir.chdir tmp
    File.open(".nojekyll", "wb") { |f| f.puts("Site généré localement.")
    }

    system "git init"
    system "git add ."
    message = "Site mis à jour le #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git remote add origin
                                                   git@github.com:#{GITHUB_REPONAME}.git"
    system "git push origin master --force"

    Dir.chdir pwd
  end
end
