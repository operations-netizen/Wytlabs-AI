import Icon from './ui/Icon';
import { CreateScreen } from './mockups';
import { ctas } from '../data/site';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero dark" id="top">
      <div className="hero__bg" aria-hidden="true">
        <span className="mesh" />
        <span className="aura hero__a1" />
        <span className="aura hero__a2" />
        <span className="hero__seam" />
      </div>

      <div className="hero__in wrap wrap--wide">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="eyebrow__bar" />
            Wytlabs AI
          </p>

          {/* Trailing spaces keep the accessible name readable — <br> alone
              concatenates the lines with no separator in textContent. */}
          {/* Three clauses rather than one sentence: measured, "marketing
              workspace." cannot fit a single line at 56px+ in this column. */}
          <h1 className="hero__h1">
            {'Your marketing, '}
            <br />
            {'one workspace, '}
            <br />
            <span className="gtext">powered by AI.</span>
          </h1>

          <p className="hero__lede">
            Create on-brand content, streamline your workflow and scale your content production
            with Wytlabs AI.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary btn--lg" href={ctas.primary.href}>
              {ctas.primary.label}
              <Icon name="arrowRight" size={16} strokeWidth={2.2} className="btn__arrow" />
            </a>
            <a className="btn btn--outline btn--lg hero__ghost" href={ctas.secondary.href}>
              {ctas.secondary.label}
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="frame hero__frame">
            <CreateScreen dark />
          </div>
        </div>
      </div>
    </section>
  );
}
