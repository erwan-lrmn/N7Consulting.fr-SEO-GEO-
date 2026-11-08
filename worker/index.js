const SITE_URL = 'https://n7consulting.erwan-2b1.workers.dev';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Force HTTPS for every hostname (workers.dev and future custom domains).
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);

    if (request.method !== 'GET') {
      return response;
    }

    const contentType = response.headers.get('content-type') ?? '';
    const isRewritable = contentType.includes('text/html') || contentType.includes('xml') || contentType.includes('text/plain');

    if (!isRewritable) {
      return response;
    }

    const path = url.pathname === '/' ? '/' : url.pathname.replace(/\/+$/, '');
    const canonical = `${url.origin}${path}`;
    let body = await response.text();

    // The SPA fallback serves the same index.html for every route: set the canonical path server-side.
    body = body.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`);

    // Keep JSON-LD, sitemap.xml and robots.txt on the host actually serving the site.
    body = body.replaceAll(SITE_URL, url.origin);

    const headers = new Headers(response.headers);
    headers.delete('content-length');
    headers.delete('content-encoding');
    headers.delete('etag');

    return new Response(body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
