import CtaBanner from '../components/layout/CtaBanner';
import ArticleCard from '../components/ui/ArticleCard';
import Reveal from '../components/ui/Reveal';
import Wave from '../components/ui/Wave';
import { articles } from '../data/articles';
import { newsContent, pageTitles } from '../data/pages';
import { siteContent } from '../data/site';
import { usePageTitle } from '../usePageTitle';

export default function NewsPage() {
  usePageTitle(pageTitles.news);

  return (
    <>
      <section
        className="relative bg-n7-navy bg-cover bg-center px-5 pb-[100px] pt-[120px] text-white sm:px-[30px] lg:min-h-[480px] lg:pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 47, 77, 0.8) 0%, rgba(20, 47, 77, 0.6) 55%, rgb(20, 47, 77) 100%), url("${newsContent.background}")`,
        }}
      >
        <div className="mx-auto max-w-[750px] pt-0 text-center lg:pt-20">
          <h1 className="mb-2.5 mt-5 font-serif text-[40px] font-bold leading-[48px] sm:text-5xl sm:leading-[57.6px]">
            <span className="sr-only">N7 Consulting à Toulouse : </span>
            {newsContent.title}
          </h1>
          <p className="mb-6 text-lg leading-7 sm:text-2xl sm:leading-9">{newsContent.intro}</p>
        </div>
        <Wave variant="navyBelow" />
      </section>

      <section className="mt-[45px] bg-white">
        <div className="mx-auto max-w-[1180px] px-6 pb-16 pt-[73.6px]">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Reveal key={article.slug} delay={(index % 3) * 120} className="h-full">
                <ArticleCard article={article} readMore={newsContent.readMore} headingLevel="h2" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner content={siteContent.ctaBanner} arcColor="white" />
    </>
  );
}
