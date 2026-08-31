import Icon from './ui/Icon';
import Reveal from './ui/Reveal';
import { system, priceIsFinal } from '../data/system';
import './System.css';

/**
 * The All-In-One managed offer.
 *
 * Dark, so it reads as a distinct proposition rather than a fifth column of
 * the plan table — this is a managed service, not another platform tier.
 *
 * The header is a three-part bar — name, statement, rate — because two poles
 * with short copy at each end left half the row empty. The rate sits in its
 * own bordered panel so it reads as the commercial anchor rather than as text
 * trailing off the end of a line.
 *
 * The scope grid is drawn with a background colour showing through 1px gaps
 * rather than borders per cell, so no seam ever doubles up.
 */
export default function System() {
  return (
    <section className="sys dark" id="system">
      <span className="mesh sys__mesh" aria-hidden="true" />
      <span className="aura sys__aura" aria-hidden="true" />

      <div className="wrap wrap--wide sys__in">
        <Reveal className="sys__head">
          <div className="sys__headl">
            <p className="eyebrow sys__eyebrow">
              <span className="eyebrow__bar" />
              {system.label}
            </p>
            <h2 className="sys__name">{system.name}</h2>
            <p className="sys__tag">{system.tagline}</p>
          </div>

          {/* The statement sits between the name and the rate rather than on
              its own row below. On a row of its own it left a 687px void
              across the middle of the header — half the width empty — and
              cost an extra band of height to say one sentence. */}
          <p className="sys__sum">
            <span className="sys__srule" aria-hidden="true" />
            {system.summary}
          </p>

          <div className="sys__pricecard">
            <span className="sys__amt">{system.price}</span>
            <span className="sys__per">{system.period}</span>
            {!priceIsFinal && <span className="sys__ind">Indicative pricing</span>}
          </div>
        </Reveal>

        <div className="sys__grid">
          {system.items.map((it, i) => (
            <Reveal as="article" className="sys__c" key={it.title} delay={i * 60}>
              <span className="sys__n" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="sys__i" aria-hidden="true">
                <Icon name={it.icon} size={20} strokeWidth={1.7} />
              </span>
              <h3 className="sys__t">{it.title}</h3>
              <p className="sys__b">{it.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="sys__act" delay={110}>
          <a className="btn btn--light btn--lg" href={system.cta.href}>
            {system.cta.label}
            <Icon name="arrowRight" size={16} strokeWidth={2.2} className="btn__arrow" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
