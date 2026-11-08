import ContactForm from '../components/ContactForm';
import { contactContent, pageTitles } from '../data/pages';
import { usePageTitle } from '../usePageTitle';

export default function ContactPage() {
  usePageTitle(pageTitles.contact);

  return (
    <>
      <section
        className="flex h-[400px] items-center justify-center bg-cover bg-top px-5 pt-[90px] sm:h-[540px]"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${contactContent.hero.background}")` }}
      >
        <h1 className="mb-2.5 text-center font-serif text-[40px] font-bold leading-[48px] text-white sm:text-5xl sm:leading-[57.6px]">
          <span className="sr-only">Contacter N7 Consulting à Toulouse : </span>
          {contactContent.hero.title}
        </h1>
      </section>
      <section className="bg-white px-5 pb-[115px] pt-[100px]">
        <div className="mx-auto max-w-[846px]">
          <h2 className="mb-6 text-[28px] font-bold leading-9 text-black sm:text-4xl sm:leading-[45px]">{contactContent.title}</h2>
          <p className="mb-6 text-lg font-medium leading-[28.8px] text-black">{contactContent.intro}</p>
          <ContactForm content={contactContent} />
        </div>
      </section>
    </>
  );
}
