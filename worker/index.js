const SITE_URL = 'https://n7consulting.erwan-2b1.workers.dev';
const CANONICAL_HOST = 'n7consulting.fr';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Consolide hôte, protocole et chemin en UN seul 301 (www → apex, HTTP → HTTPS,
    // /index.html → /, slash final retiré). Les crawlers ne voient jamais plus d'un saut.
    let changed = false;

    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      changed = true;
    }
    if (url.protocol === 'http:') {
      url.protocol = 'https:';
      changed = true;
    }

    const path = url.pathname;
    if (path === '/index.html') {
      url.pathname = '/';
      changed = true;
    } else if (path !== '/' && path.endsWith('/')) {
      url.pathname = path.slice(0, -1);
      changed = true;
    } else if (path.endsWith('.html')) {
      url.pathname = path.slice(0, -'.html'.length);
      changed = true;
    }

    if (changed) {
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);

    if (request.method !== 'GET') {
      return response;
    }

    const contentType = response.headers.get('content-type') ?? '';
    const isRewritable = contentType.includes('text/html') || contentType.includes('xml') || contentType.includes('text/plain') || contentType.includes('text/markdown');

    if (!isRewritable) {
      return response;
    }

    const canonical = `${url.origin}${url.pathname}`;
    let body = await response.text();

    // The SPA fallback serves the same index.html for every route: set the canonical path server-side.
    body = body.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`);

    // Keep JSON-LD, sitemap.xml and robots.txt on the host actually serving the site.
    body = body.replaceAll(SITE_URL, url.origin);

    const headers = new Headers(response.headers);
    headers.delete('content-length');
    headers.delete('content-encoding');
    headers.delete('etag');

    // Le HTML doit toujours être revalidé pour publier les nouveaux builds.
    if (contentType.includes('text/html')) {
      headers.set('cache-control', 'public, max-age=0, must-revalidate');
    }

    return new Response(body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
