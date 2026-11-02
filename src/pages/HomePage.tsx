import CtaBanner from '../components/layout/CtaBanner';
import Hero from '../components/home/Hero';
import LatestNews from '../components/home/LatestNews';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import TrustSection from '../components/home/TrustSection';
import VideoSection from '../components/home/VideoSection';
import { articles } from '../data/articles';
import { homeContent } from '../data/home';
import { newsContent, pageTitles } from '../data/pages';
import { siteContent } from '../data/site';
import { usePageTitle } from '../usePageTitle';

export default function HomePage() {
  usePageTitle(pageTitles.home, true);

  return (
    <>
      <Hero content={homeContent.hero} />
      <StatsSection stats={homeContent.stats} partnersTitle={siteContent.partnersTitle} partners={siteContent.partners} />
      <ServicesSection content={homeContent.services} />
      <TrustSection content={homeContent.trust} />
      <VideoSection content={homeContent.video} />
      <LatestNews content={homeContent.latestNews} articles={articles} readMore={newsContent.readMore} />
      <CtaBanner content={siteContent.ctaBanner} arcColor="mist" />
    </>
  );
}
