import type { ArticleBlock } from '../../types';
import RichText from '../ui/RichText';

interface ArticleBodyProps {
  blocks: ArticleBlock[];
}

const linkClass =
  'text-n7-navy underline decoration-n7-gold decoration-[1.5px] underline-offset-[3px] transition-colors duration-300 hover:text-n7-gold';
const strongClass = 'font-bold text-n7-navy';

export default function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="text-lg leading-[30.6px] text-n7-prose">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case 'heading':
            return block.level === 2 ? (
              <h2 key={key} className="mb-3.5 mt-11 text-2xl font-bold leading-8 text-n7-navy sm:text-[28px] sm:leading-[36.4px]">
                {block.text}
              </h2>
            ) : (
              <h3 key={key} className="mb-2.5 mt-8 text-[21px] font-bold leading-[28.35px] text-n7-navy">
                {block.text}
              </h3>
            );
          case 'paragraph':
            return (
              <p key={key} className="mb-[18px]">
                <RichText text={block.text} linkClassName={linkClass} strongClassName={strongClass} highlightClassName={strongClass} />
              </p>
            );
          case 'list': {
            const ListTag = block.ordered ? 'ol' : 'ul';
            return (
              <ListTag key={key} className={`mb-5 pl-6 ${block.ordered ? 'list-decimal' : 'list-disc'}`}>
                {block.items.map((item) => (
                  <li key={item} className="mb-2">
                    <RichText text={item} linkClassName={linkClass} strongClassName={strongClass} highlightClassName={strongClass} />
                  </li>
                ))}
              </ListTag>
            );
          }
          case 'logos':
            return (
              <div key={key} className="my-1.5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {block.items.map((logo) => (
                  <figure
                    key={logo.src}
                    className="flex h-24 items-center justify-center rounded-[10px] border border-n7-line bg-white px-5 py-4 shadow-actu transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img src={logo.src} alt={logo.alt} loading="lazy" className="max-h-[62px] w-auto max-w-full object-contain" />
                  </figure>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
