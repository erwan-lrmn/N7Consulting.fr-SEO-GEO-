import Button from '../components/ui/Button';
import { notFoundContent, pageTitles } from '../data/pages';
import { usePageTitle } from '../usePageTitle';

export default function NotFoundPage() {
  usePageTitle(pageTitles.notFound);

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-n7-navy px-5 pb-20 pt-[150px] text-center text-white">
      <div className="max-w-[640px]">
        <h1 className="mb-4 font-serif text-[40px] font-bold leading-[48px] sm:text-5xl sm:leading-[57.6px]">{notFoundContent.title}</h1>
        <p className="mb-8 text-lg leading-[28.8px]">{notFoundContent.text}</p>
        <Button link={notFoundContent.button} />
      </div>
    </section>
  );
}
