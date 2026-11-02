import { Fragment, type ReactNode } from 'react';
import type { RichText as RichTextValue } from '../../types';
import SmartLink from './SmartLink';

interface RichTextProps {
  text: RichTextValue;
  strongClassName?: string;
  highlightClassName?: string;
  linkClassName?: string;
}

const TOKEN = /(\*\*[\s\S]+?\*\*|==[\s\S]+?==|\[[^\]]+\]\([^)]+\))/g;

function renderLines(value: string, keyPrefix: string): ReactNode[] {
  return value.split('\n').map((line, index) => (
    <Fragment key={`${keyPrefix}-${index}`}>
      {index > 0 && <br />}
      {line}
    </Fragment>
  ));
}

function parse(value: string, props: RichTextProps, keyPrefix: string): ReactNode[] {
  const {
    strongClassName = 'font-bold',
    highlightClassName = 'font-bold text-n7-gold',
    linkClassName = 'underline decoration-n7-gold underline-offset-2 transition-colors duration-300 hover:text-n7-gold',
  } = props;

  return value.split(TOKEN).map((part, index) => {
    const key = `${keyPrefix}-${index}`;
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={key} className={strongClassName}>
          {parse(part.slice(2, -2), props, key)}
        </strong>
      );
    }
    if (part.startsWith('==') && part.endsWith('==') && part.length > 4) {
      return (
        <strong key={key} className={highlightClassName}>
          {parse(part.slice(2, -2), props, key)}
        </strong>
      );
    }
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link && link[1] !== undefined && link[2] !== undefined) {
      return (
        <SmartLink key={key} href={link[2]} className={linkClassName}>
          {parse(link[1], props, key)}
        </SmartLink>
      );
    }
    return <Fragment key={key}>{renderLines(part, key)}</Fragment>;
  });
}

export default function RichText(props: RichTextProps) {
  return <>{parse(props.text, props, 'rt')}</>;
}
