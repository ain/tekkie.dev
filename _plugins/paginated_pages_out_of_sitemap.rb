# Pagination pages carry <meta name="robots" content="noindex, follow">, so
# listing them in the sitemap only submits URLs we ask Google not to index.
# jekyll-paginate rebuilds each page from index.html and copies its front
# matter, so `sitemap: false` cannot be set there without dropping page 1 too.
# This hook runs after every generator but before rendering, and jekyll-sitemap
# reads the flag from its Liquid template at render time.
Jekyll::Hooks.register :site, :pre_render do |site|
  site.pages.each do |page|
    page.data["sitemap"] = false if page.pager && page.pager.page > 1
  end
end
