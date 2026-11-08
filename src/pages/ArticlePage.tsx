import { useParams } from 'react-router-dom';
import CtaBanner from '../components/layout/CtaBanner';
import ArticleBody from '../components/news/ArticleBody';
import Button from '../components/ui/Button';
import SmartLink from '../components/ui/SmartLink';
import { findArticle } from '../data/articles';
import { newsContent } from '../data/pages';
import { siteContent } from '../data/site';
import { usePageTitle } from '../usePageTitle';
import NotFoundPage from './NotFoundPage';

function ArticleView({ slug }: { slug: string }) {
  const article = findArticle(slug);
  usePageTitle(article ? article.seoTitle : '', true);

  if (!article) return <NotFoundPage />;

  return (
    <>
      <header className="bg-n7-navy px-5 pb-[130px] pt-[130px] text-white sm:px-[30px] sm:pt-[140px]">
        <div className="mx-auto flex max-w-[860px] flex-col gap-[18px]">
          <SmartLink
            href={newsContent.backLink.href}
            className="w-fit text-[15px] font-medium leading-5 text-n7-sky transition-colors duration-300 hover:text-n7-gold"
          >
            ← {newsContent.backLink.label}
          </SmartLink>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="rounded-[10px] bg-n7-sand px-2.5 py-1 text-xs font-semibold uppercase leading-4 tracking-[0.5px] text-n7-navy">
              {article.category}
            </span>
            <span className="text-sm leading-[18px] text-n7-pale">{article.date}</span>
          </div>
          <h1 className="font-serif text-[32px] font-bold leading-[42px] sm:text-5xl sm:leading-[57.6px]">{article.title}</h1>
          <p className="text-lg leading-7 text-n7-pale sm:text-xl sm:leading-[30px]">{article.excerpt}</p>
        </div>
      </header>

      <div className="mx-auto -mt-[90px] max-w-[920px] px-5 sm:px-[30px]">
        <div className="overflow-hidden rounded-[10px] shadow-cover">
          <img src={article.cover.src} alt={article.cover.alt} className="aspect-[860/452] w-full object-cover" />
        </div>
      </div>

      <section className="px-5 pb-[72px] pt-12 sm:px-[30px]">
        <article className="mx-auto max-w-[760px]">
          <ArticleBody blocks={article.blocks} />
          <p className="mt-[27px] text-sm leading-5 text-n7-graphite">{article.updated}</p>
        </article>
      </section>

      <section className="bg-white px-5 py-20 text-center sm:px-[30px]">
        <p className="mb-6 text-[17px] leading-[27.2px] text-n7-graphite">{newsContent.feedbackQuestion}</p>
        <Button link={newsContent.feedbackButton} variant="small" />
      </section>

      <CtaBanner content={siteContent.ctaBanner} arcColor="white" />
    </>
  );
}

export default function ArticlePage() {
  const { slug = '' } = useParams<{ slug: string }>();
  return <ArticleView key={slug} slug={slug} />;
}
