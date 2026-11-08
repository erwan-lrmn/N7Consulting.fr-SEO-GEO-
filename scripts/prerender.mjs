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

if (!ROOT_PATTERN.test(shell)) {
  throw new Error('Impossible de trouver <div id="root"></div> dans dist/index.html');
}

for (const route of prerenderRoutes) {
  const markup = render(route.path);
  if (markup.length < 1000) {
    throw new Error(`Rendu vide pour ${route.path}`);
  }

  const canonical = `${SITE_URL}${route.path}`;
  let html = shell
    .replace(ROOT_PATTERN, () => `<div id="root">${markup}</div>`)
    .replace(TITLE_PATTERN, () => `<title>${escapeHtml(route.title)}</title>`)
    .replace(CANONICAL_PATTERN, () => `<link rel="canonical" href="${canonical}" />`);

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
