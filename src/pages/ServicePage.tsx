import CtaBanner from '../components/layout/CtaBanner';
import CaseStudySlider from '../components/services/CaseStudySlider';
import MethodSection from '../components/services/MethodSection';
import ServiceGroup from '../components/services/ServiceGroup';
import ServiceHero from '../components/services/ServiceHero';
import Wave from '../components/ui/Wave';
import { methodContent, servicePages } from '../data/services';
import { siteContent } from '../data/site';
import type { ServiceSlug } from '../types';
import { usePageTitle } from '../usePageTitle';

interface ServicePageProps {
  slug: ServiceSlug;
}

export default function ServicePage({ slug }: ServicePageProps) {
  const page = servicePages[slug];
  usePageTitle(page.metaTitle);
  let groupCount = 0;

  return (
    <>
      <ServiceHero hero={page.hero} metaTitle={page.metaTitle} />
      <div className="relative bg-n7-navy px-5 pb-10 sm:px-10">
        <Wave variant="navyAbove" />
        {page.blocks.map((block) => {
          if (block.type === 'caseStudies') {
            return <CaseStudySlider key="case-studies" items={block.items} />;
          }
          groupCount += 1;
          return <ServiceGroup key={block.title} group={block} isFirst={groupCount === 1} />;
        })}
        <Wave variant="navyBelow" />
      </div>
      <div className="pt-[72px]">
        <MethodSection content={methodContent} />
      </div>
      <CtaBanner content={siteContent.ctaBanner} arcColor="white" />
    </>
  );
}
