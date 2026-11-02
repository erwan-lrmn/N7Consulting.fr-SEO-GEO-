import ServicesSection from '../components/home/ServicesSection';
import CtaBanner from '../components/layout/CtaBanner';
import { servicesOverview } from '../data/home';
import { pageTitles } from '../data/pages';
import { siteContent } from '../data/site';
import { usePageTitle } from '../usePageTitle';

export default function ServicesOverviewPage() {
  usePageTitle(pageTitles.servicesOverview);

  return (
    <>
      <div className="pt-[110px]">
        <ServicesSection content={servicesOverview} asPageTitle />
      </div>
      <CtaBanner content={siteContent.ctaBanner} arcColor="white" />
    </>
  );
}
