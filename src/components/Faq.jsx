import { useState } from 'react';
import Icon from './ui/Icon';
import Reveal from './ui/Reveal';
import { faqs } from '../data/faqs';
import { ctas } from '../data/site';
import './Faq.css';

/**
 * Editorial FAQ: the question sits in a wide left column, the accordion runs
 * full-measure on the right. Not a narrow centred box.
 */
export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sec sec--lg faq" id="faq">
      <div className="wrap wrap--wide">
        <div className="faq__grid">
          <div className="faq__aside">
            <Reveal as="p" className="eyebrow">
              <span className="eyebrow__bar" />
              FAQ
            </Reveal>
            <Reveal delay={60}>
              <h2 className="faq__h">Questions?</h2>
            </Reveal>
            <Reveal as="p" className="faq__l" delay={120}>
              Straight answers on what the platform does, what it costs, and what Wytlabs does
              around it. If something is missing, ask us directly.
            </Reveal>
            <Reveal delay={180}>
              <a className="btn btn--outline" href={ctas.talk.href}>
                {ctas.talk.label}
              </a>
            </Reveal>
          </div>

          <div className="faq__list">
            {faqs.map((f, i) => {
              const on = open === i;
              return (
                <Reveal className={`faq__i ${on ? 'on' : ''}`.trim()} key={f.q} delay={Math.min(i, 5) * 45}>
                  <h3 className="faq__qh">
                    <button
                      type="button"
                      className="faq__q"
                      aria-expanded={on}
                      aria-controls={`faq-a-${i}`}
                      id={`faq-q-${i}`}
                      onClick={() => setOpen(on ? null : i)}
                    >
                      <span className="faq__qn">{String(i + 1).padStart(2, '0')}</span>
                      <span className="faq__qt">{f.q}</span>
                      <span className="faq__qi" aria-hidden="true">
                        <Icon name="plus" size={15} strokeWidth={2.4} />
                      </span>
                    </button>
                  </h3>
                  <div
                    className="faq__a"
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    hidden={!on}
                  >
                    <p>{f.a}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
