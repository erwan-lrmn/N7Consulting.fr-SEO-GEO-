import AboutHero from '../components/about/AboutHero';
import EnvironmentTabs from '../components/about/EnvironmentTabs';
import JuniorSection from '../components/about/JuniorSection';
import PartnersBand from '../components/about/PartnersBand';
import TeamSlider from '../components/about/TeamSlider';
import Timeline from '../components/about/Timeline';
import CtaBanner from '../components/layout/CtaBanner';
import { aboutContent } from '../data/about';
import { pageTitles } from '../data/pages';
import { siteContent } from '../data/site';
import { usePageTitle } from '../usePageTitle';

export default function AboutPage() {
  usePageTitle(pageTitles.about);

  return (
    <>
      <AboutHero hero={aboutContent.hero} />
      <JuniorSection content={aboutContent.junior} />
      <TeamSlider content={aboutContent.team} />
      <EnvironmentTabs content={aboutContent.environment} />
      <PartnersBand title={siteContent.partnersTitle} partners={siteContent.partners} />
      <Timeline content={aboutContent.timeline} />
      <CtaBanner content={siteContent.ctaBanner} arcColor="navy" />
    </>
  );
}
