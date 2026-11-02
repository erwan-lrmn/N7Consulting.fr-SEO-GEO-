import Hero from './components/Hero';
import Navbar from './components/Navbar';
import StatsSection from './components/StatsSection';
import { siteContent } from './data';

export default function App() {
  return (
    <>
      <Navbar content={siteContent.navigation} />
      <main>
        <Hero content={siteContent.hero} />
        <StatsSection content={siteContent.stats} />
      </main>
    </>
  );
}
