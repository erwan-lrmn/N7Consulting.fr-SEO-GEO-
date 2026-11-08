import { Link } from 'react-router-dom';
import type { ArticleCardData } from '../../types';

interface ArticleCardProps {
  article: ArticleCardData;
  readMore: string;
  headingLevel?: 'h2' | 'h3';
}

export default function ArticleCard({ article, readMore, headingLevel = 'h3' }: ArticleCardProps) {
  const Heading = headingLevel;

  return (
    <Link
      to={`/actualites/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-n7-line bg-white text-n7-navy shadow-actu transition-all duration-300 hover:-translate-y-1 hover:shadow-actu-hover"
    >
      <div className="aspect-[357/187] overflow-hidden bg-n7-navy">
        <img
          src={article.cover.src}
          alt={article.cover.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-[22px] pb-[22px] pt-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-[10px] bg-n7-sand px-2.5 py-1 text-xs font-semibold uppercase leading-4 tracking-[0.5px] text-n7-navy">
            {article.category}
          </span>
          <span className="text-[13px] leading-4 text-n7-steel">{article.date}</span>
        </div>
        <Heading className="text-xl font-bold leading-[26px] text-n7-navy">{article.title}</Heading>
        <p className="text-[15px] leading-[23.25px] text-n7-slate">{article.excerpt}</p>
        <span className="mt-auto pt-2 text-[15px] font-semibold leading-5 text-n7-navy">
          <span className="border-b border-n7-gold pb-0.5 transition-colors duration-300 group-hover:text-n7-gold">
            {readMore} <span className="text-n7-gold">→</span>
          </span>
        </span>
      </div>
    </Link>
  );
}
