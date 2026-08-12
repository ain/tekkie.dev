# Anything served with <meta name="robots" content="noindex, follow"> has no
# business in the sitemap: listing it only submits URLs we ask Google not to
# index. Two sources of that, mirroring the condition in _includes/head.html.
#
# Pagination pages: jekyll-paginate rebuilds each page from index.html and
# copies its front matter, so `sitemap: false` cannot be set there without
# dropping page 1 too. Archived posts: derived from `archived: true` so the one
# front matter flag drives both the meta tag and the sitemap, with no drift.
#
# This hook runs after every generator but before rendering, and jekyll-sitemap
# reads the flag from its Liquid template at render time.
Jekyll::Hooks.register :site, :pre_render do |site|
  site.pages.each do |page|
    page.data["sitemap"] = false if page.pager && page.pager.page > 1
  end

  site.documents.each do |doc|
    doc.data["sitemap"] = false if doc.data["archived"]
  end
end
