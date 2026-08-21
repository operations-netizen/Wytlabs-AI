import Icon from './ui/Icon';
import Reveal from './ui/Reveal';
import { why } from '../data/content';
import { ctas, credentials } from '../data/site';
import Logo from './ui/Logo';
import './Why.css';

/**
 * The Wytlabs differentiator. Four pillars as a numbered editorial grid on a
 * dark ground, closing with the real partner credentials.
 */
export default function Why() {
  return (
    <section className="sec sec--lg why dark" id="why">
      <span className="mesh" aria-hidden="true" />
      <div className="wrap wrap--wide sec__in">
        <div className="why__top">
          <div>
            <Reveal as="p" className="eyebrow">
              <span className="eyebrow__bar" />
              {why.eyebrow}
            </Reveal>
            <Reveal delay={60}>
              <h2 className="why__t">{why.title}</h2>
            </Reveal>
          </div>
          <Reveal className="why__side" delay={120}>
            <p className="why__l">{why.lede}</p>
            <a className="btn btn--light" href={ctas.talk.href}>
              {ctas.talk.label}
              <Icon name="arrowRight" size={15} strokeWidth={2.2} className="btn__arrow" />
            </a>
          </Reveal>
        </div>

        <div className="why__grid">
          {why.pillars.map((p, i) => (
            <Reveal as="article" className="why__p" key={p.title} delay={i * 90}>
              <span className="why__pn">{String(i + 1).padStart(2, '0')}</span>
              <span className="why__pi">
                <Icon name={p.icon} size={19} strokeWidth={1.8} />
              </span>
              <p className="why__pk">{p.kicker}</p>
              <h3 className="why__pt">{p.title}</h3>
              <p className="why__pb">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="why__foot">
          <Logo variant="light" height={16} />
          <span className="why__fdiv" aria-hidden="true" />
          <ul className="why__creds">
            {credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
