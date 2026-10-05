// web.classifiedjunction.com: serves the landing page (./site). Marketplace addresses opened on
// this domain still work: /api/* (payment webhook, backups, banners) is handed to the
// marketplace Worker, and page links move to classifiedjunction.com / admin.
const WEB = 'https://classifiedjunction.com'
const ADMIN = 'https://admin.classifiedjunction.com'
const MARKET_PAGES = ['/ads/', '/my', '/payment/', '/post', '/contact', '/refund-policy']

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const path = url.pathname
    if (path.startsWith('/api/')) return env.MARKET.fetch(request)
    if (path === '/admin' || path.startsWith('/admin/')) return Response.redirect(ADMIN + path + url.search, 301)
    if (MARKET_PAGES.some((p) => path === p || path.startsWith(p.endsWith('/') ? p : p + '/'))) {
      return Response.redirect(WEB + path + url.search, 301)
    }
    return env.ASSETS.fetch(request)
  },
}
