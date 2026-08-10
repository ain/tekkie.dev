# frozen_string_literal: true
source "https://rubygems.org"

# Jekyll is upgraded directly rather than through the github-pages gem: the site
# is built by GitHub Actions, so the legacy Pages plugin whitelist no longer
# applies and its Jekyll 3.10 pin is not worth carrying.
gem 'jekyll', '~> 4.4'
# Jekyll 4 defaults to jekyll-sass-converter 3.x, whose dart-sass binary requires
# macOS 14 and so cannot run on this machine. 2.x keeps the libsass engine the
# site has always built with, and produces identical CSS.
gem 'jekyll-sass-converter', '~> 2.0'

group :jekyll_plugins do
  gem 'jekyll-paginate'
  gem 'jekyll-redirect-from'
  gem 'jekyll-mentions'
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
  gem 'jekyll-gist'
  gem 'jekyll-last-modified-at', '~> 1.3'
end
