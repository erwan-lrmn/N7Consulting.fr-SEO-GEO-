import { useState, type FormEvent } from 'react';
import type { CheckboxOption, ContactContent } from '../types';

interface ContactFormProps {
  content: ContactContent;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const labelClass =
  'mb-6 block font-montserrat text-base font-semibold uppercase leading-7 tracking-[3.84px] text-n7-ink/40 sm:text-lg';
const fieldClass =
  'block w-full rounded-[10px] border border-n7-ink/10 bg-white px-[30px] py-[21px] font-montserrat text-lg leading-[28.08px] tracking-[-0.16px] text-n7-ink placeholder:text-n7-ink/50 transition-all duration-300 focus:border-n7-navy focus:outline-none focus:ring-2 focus:ring-n7-sky/60';

function ChoiceGroup({ options, selected, onToggle }: { options: CheckboxOption[]; selected: string[]; onToggle: (name: string) => void }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-5">
      {options.map((option) => {
        const checked = selected.includes(option.name);
        return (
          <label
            key={option.name}
            className={`flex cursor-pointer items-center rounded-[10px] border px-8 py-[18px] transition-all duration-300 hover:shadow-[0_0_5px_3px_rgba(0,0,0,0.2)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-n7-sky ${
              checked ? 'border-n7-navy bg-n7-navy text-white' : 'border-black/10 text-n7-graphite'
            }`}
          >
            <input
              type="checkbox"
              name={option.name}
              checked={checked}
              onChange={() => onToggle(option.name)}
              className="sr-only"
            />
            <span className="font-montserrat text-base font-medium leading-7 tracking-[-0.32px] sm:text-lg">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}

export default function ContactForm({ content }: ContactFormProps) {
  const [services, setServices] = useState<string[]>([]);
  const [sources, setSources] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>('idle');

  const toggle = (list: string[], setList: (next: string[]) => void, name: string): void => {
    setList(list.includes(name) ? list.filter((item) => item !== name) : [...list, name]);
  };

  const labelsOf = (options: CheckboxOption[], names: string[]): string =>
    options
      .filter((option) => names.includes(option.name))
      .map((option) => option.label)
      .join(', ');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values: Record<string, string> = {};
    content.fields.forEach((field) => {
      values[field.placeholder] = String(data.get(field.name) ?? '').trim();
    });
    values[content.servicesLabel] = labelsOf(content.services, services);
    values[content.sourceLabel] = labelsOf(content.sources, sources);

    setStatus('sending');
    try {
      if (content.endpoint) {
        const response = await fetch(content.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
      } else {
        const subject = values['Sujet'] || content.title;
        const body = Object.entries(values)
          .filter(([, value]) => value)
          .map(([key, value]) => `${key} : ${value}`)
          .join('\n');
        window.location.href = `mailto:${content.recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
      setStatus('success');
      form.reset();
      setServices([]);
      setSources([]);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="rounded-[10px] bg-[#DDDDDD] p-5 text-center text-base leading-6 text-n7-graphite">
        {content.successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-sm leading-5 text-n7-graphite">
      <fieldset>
        <legend className={labelClass}>{content.servicesLabel}</legend>
        <ChoiceGroup options={content.services} selected={services} onToggle={(name) => toggle(services, setServices, name)} />
      </fieldset>

      <fieldset className="mt-[60px]">
        <legend className={labelClass}>{content.infoLabel}</legend>
        <div className="grid grid-cols-1 gap-x-[33px] gap-y-8 sm:grid-cols-2">
          {content.fields.map((field) => {
            const span = field.width === 'full' ? 'sm:col-span-2' : '';
            return (
              <label key={field.name} className={span}>
                <span className="sr-only">{field.placeholder}</span>
                {field.type === 'textarea' ? (
                  <textarea name={field.name} placeholder={field.placeholder} required={field.required} rows={4} className={`${fieldClass} min-h-[160px] resize-y`} />
                ) : (
                  <input type={field.type} name={field.name} placeholder={field.placeholder} required={field.required} className={fieldClass} />
                )}
              </label>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-[60px]">
        <legend className={labelClass}>{content.sourceLabel}</legend>
        <ChoiceGroup options={content.sources} selected={sources} onToggle={(name) => toggle(sources, setSources, name)} />
      </fieldset>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-[60px] h-[60px] w-full max-w-[210px] rounded-[10px] bg-n7-gold p-[15px] font-montserrat text-lg font-semibold leading-[28.08px] text-white transition-all duration-300 hover:bg-n7-sand hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-n7-sky disabled:cursor-wait disabled:opacity-70"
      >
        {content.submitLabel}
      </button>

      {status === 'error' && (
        <div role="alert" className="mt-5 rounded-[10px] bg-[#FFDEDE] p-2.5 text-base leading-6 text-n7-graphite">
          {content.errorMessage}
        </div>
      )}
    </form>
  );
}
