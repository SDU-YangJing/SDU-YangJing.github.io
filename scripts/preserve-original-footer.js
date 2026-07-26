/**
 * The recovered static site displayed a single copyright year ("©2025").
 * Butterfly normally turns this into a year range after New Year, so keep the
 * author's original footer text stable across future builds.
 */
hexo.extend.filter.register('after_render:html', function preserveOriginalFooter(html) {
  return html.replace(
    /&copy;2025(?:\s*-\s*\d{4})?\s+By\s+平和男人杨争争/g,
    '&copy;2025 By 平和男人杨争争'
  )
})
