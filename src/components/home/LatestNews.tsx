import type { Article, LatestNewsContent } from '../../types';
import ArticleCard from '../ui/ArticleCard';
import Reveal from '../ui/Reveal';
import SmartLink from '../ui/SmartLink';
import Wave from '../ui/Wave';

interface LatestNewsProps {
  content: LatestNewsContent;
  articles: Article[];
  readMore: string;
}

export default function LatestNews({ content, articles, readMore }: LatestNewsProps) {
  return (
    <section id="actualites" className="relative bg-n7-mist pb-[88px] pt-12">
      <Wave variant="arc" color="white" />
      <div className="mx-auto max-w-[1180px] px-6 pb-16 pt-[73.6px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mb-2.5 mt-5 text-[28px] font-bold leading-9 text-black sm:text-4xl sm:leading-[45px]">{content.title}</h2>
            <p className="mt-2.5 max-w-[620px] text-lg leading-[28.8px] text-n7-slate">{content.intro}</p>
          </div>
          <SmartLink
            href={content.allLink.href}
            className="group shrink-0 text-base font-semibold leading-5 text-n7-navy transition-colors duration-300 hover:text-n7-gold"
          >
            <span className="border-b border-n7-gold pb-0.5">
              {content.allLink.label} <span className="text-n7-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </SmartLink>
        </div>
        <div className="mt-9 grid grid-cols-1 gap-x-7 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, content.count).map((article, index) => (
            <Reveal key={article.slug} delay={index * 120} className="h-full">
              <ArticleCard article={article} readMore={readMore} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
