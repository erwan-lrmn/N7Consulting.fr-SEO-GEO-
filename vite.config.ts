import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/** Inline le CSS extrait dans le HTML pour supprimer la requête bloquante. */
function inlineCss(): Plugin {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html;

        let result = html;
        for (const asset of Object.values(ctx.bundle)) {
          if (asset.type !== 'asset' || !asset.fileName.endsWith('.css')) continue;

          const href = `/${asset.fileName}`;
          const css = typeof asset.source === 'string' ? asset.source : new TextDecoder().decode(asset.source);
          const escapedHref = href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const linkPattern = new RegExp(`<link[^>]*href="${escapedHref}"[^>]*>`);

          if (linkPattern.test(result)) {
            result = result.replace(linkPattern, `<style>${css}</style>`);
            delete ctx.bundle[asset.fileName];
          }
        }

        return result;
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), inlineCss()],
});
