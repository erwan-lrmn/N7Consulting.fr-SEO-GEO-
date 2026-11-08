import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { notFoundTitle, prerenderRoutes, render } from '../dist-ssr/entry-server.js';

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));
const shellPath = join(distDir, 'index.html');
const shell = await readFile(shellPath, 'utf8');
const SITE_URL = 'https://n7consulting.erwan-2b1.workers.dev';

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const ROOT_PATTERN = /<div\s+id=["']?root["']?[^>]*>\s*<\/div>/;
const CANONICAL_PATTERN = /<link rel="canonical" href="[^"]*"\s*\/?>/;
const TITLE_PATTERN = /<title>.*?<\/title>/s;
const DESCRIPTION_PATTERN = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/;
const OG_TYPE_PATTERN = /<meta property="og:type" content="[^"]*"\s*\/?>/;
const OG_TITLE_PATTERN = /<meta property="og:title" content="[^"]*"\s*\/?>/;
const OG_DESCRIPTION_PATTERN = /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/;
const OG_URL_PATTERN = /<meta property="og:url" content="[^"]*"\s*\/?>/;
const OG_IMAGE_PATTERN = /<meta property="og:image" content="[^"]*"\s*\/?>/;
const OG_IMAGE_ALT_PATTERN = /<meta property="og:image:alt" content="[^"]*"\s*\/?>/;
const TW_TITLE_PATTERN = /<meta name="twitter:title" content="[^"]*"\s*\/?>/;
const TW_DESCRIPTION_PATTERN = /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/;
const TW_IMAGE_PATTERN = /<meta name="twitter:image" content="[^"]*"\s*\/?>/;
const TW_IMAGE_ALT_PATTERN = /<meta name="twitter:image:alt" content="[^"]*"\s*\/?>/;
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/n7-consulting.jpg`;
const DEFAULT_OG_IMAGE_ALT = 'N7 Consulting, Junior-Entreprise de l’ENSEEIHT à Toulouse';

if (!ROOT_PATTERN.test(shell)) {
  throw new Error('Impossible de trouver <div id="root"></div> dans dist/index.html');
}

for (const route of prerenderRoutes) {
  const markup = render(route.path);
  if (markup.length < 1000) {
    throw new Error(`Rendu vide pour ${route.path}`);
  }

  const canonical = `${SITE_URL}${route.path}`;
  const pageUrl = `${SITE_URL}${route.path}`;
  const imageUrl = route.image ?? DEFAULT_OG_IMAGE;
  const imageAlt = route.imageAlt ?? DEFAULT_OG_IMAGE_ALT;
  const description = route.description ?? route.title;
  const ogType = route.type ?? 'website';

  let html = shell
    .replace(ROOT_PATTERN, () => `<div id="root">${markup}</div>`)
    .replace(TITLE_PATTERN, () => `<title>${escapeHtml(route.title)}</title>`)
    .replace(CANONICAL_PATTERN, () => `<link rel="canonical" href="${canonical}" />`)
    .replace(OG_TYPE_PATTERN, () => `<meta property="og:type" content="${ogType}" />`)
    .replace(OG_TITLE_PATTERN, () => `<meta property="og:title" content="${escapeHtml(route.title)}" />`)
    .replace(OG_DESCRIPTION_PATTERN, () => `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(OG_URL_PATTERN, () => `<meta property="og:url" content="${escapeHtml(pageUrl)}" />`)
    .replace(OG_IMAGE_PATTERN, () => `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`)
    .replace(OG_IMAGE_ALT_PATTERN, () => `<meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />`)
    .replace(TW_TITLE_PATTERN, () => `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`)
    .replace(TW_DESCRIPTION_PATTERN, () => `<meta name="twitter:description" content="${escapeHtml(description)}" />`)
    .replace(TW_IMAGE_PATTERN, () => `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`)
    .replace(TW_IMAGE_ALT_PATTERN, () => `<meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />`);

  if (route.description) {
    html = html.replace(
      DESCRIPTION_PATTERN,
      () => `<meta name="description" content="${escapeHtml(route.description)}" />`,
    );
  }

  const relativePath = route.path === '/' ? 'index.html' : `${route.path.replace(/^\//, '')}.html`;
  const outputPath = join(distDir, relativePath);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html, 'utf8');
  console.log(`prerender: ${route.path} -> dist/${relativePath}`);
}

console.log(`${prerenderRoutes.length} pages pré-rendues.`);

// Page 404 statique (Cloudflare la sert avec un vrai statut 404).
const notFoundMarkup = render('/404');
const notFoundHtml = shell
  .replace(ROOT_PATTERN, () => `<div id="root">${notFoundMarkup}</div>`)
  .replace(TITLE_PATTERN, () => `<title>${escapeHtml(notFoundTitle)}</title>`)
  .replace(CANONICAL_PATTERN, () => '<meta name="robots" content="noindex" />');
await writeFile(join(distDir, '404.html'), notFoundHtml, 'utf8');
console.log('prerender: 404 -> dist/404.html');
