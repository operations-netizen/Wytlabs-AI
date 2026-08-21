import Reveal from './Reveal';

/**
 * Editorial section head.
 * `variant`: 'stack' (default) · 'center' · 'split' (title left, lede right).
 * `idx` prints a drafting-style index next to the eyebrow.
 */
export default function Head({
  eyebrow,
  idx,
  title,
  lede,
  variant = 'stack',
  level: H = 'h2',
  id,
  children,
}) {
  return (
    <div className={`head ${variant === 'center' ? 'head--center' : ''} ${variant === 'split' ? 'head--split' : ''}`.trim()}>
      {eyebrow && (
        <Reveal as="p" className="eyebrow">
          {idx ? <span className="eyebrow__idx">{idx}</span> : <span className="eyebrow__bar" />}
          {eyebrow}
        </Reveal>
      )}
      <Reveal delay={70} className="head__title">
        <H id={id} style={{ margin: 0 }}>
          {title}
        </H>
      </Reveal>
      {lede && (
        <Reveal as="p" className="head__lede" delay={130}>
          {lede}
        </Reveal>
      )}
      {children}
    </div>
  );
}
