import CtaBanner from '../components/layout/CtaBanner';
import RichText from '../components/ui/RichText';
import { legalContent, pageTitles } from '../data/pages';
import { siteContent } from '../data/site';
import { usePageTitle } from '../usePageTitle';

export default function LegalPage() {
  usePageTitle(pageTitles.legal);

  return (
    <>
      <section className="mx-5 my-[140px] text-n7-graphite sm:mx-[10%] lg:my-[180px]">
        <div className="mx-auto max-w-[1152px]">
          <h1 className="mb-2.5 mt-5 text-[32px] font-bold leading-10 sm:text-[38px] sm:leading-[44px]">{legalContent.title}</h1>
          {legalContent.sections.map((section) => (
            <div key={section.heading ?? 'intro'}>
              {section.heading && <h2 className="mt-2.5 text-2xl leading-8 text-black">{section.heading}</h2>}
              <p className="my-2.5 text-base leading-[25.6px]">
                <RichText text={section.body} />
              </p>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner content={siteContent.ctaBanner} arcColor="white" />
    </>
  );
}
