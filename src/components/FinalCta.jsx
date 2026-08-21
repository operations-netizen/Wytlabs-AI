import Icon from './ui/Icon';
import Reveal from './ui/Reveal';
import Logo from './ui/Logo';
import { ctas } from '../data/site';
import { billing } from '../data/pricing';
import './FinalCta.css';

/** Closing CTA. Full-bleed navy, oversized type, the wordmark as the anchor. */
export default function FinalCta() {
  return (
    <section className="cta dark" id="contact">
      <span className="mesh" aria-hidden="true" />
      <span className="aura cta__a1" aria-hidden="true" />
      <span className="aura cta__a2" aria-hidden="true" />

      <div className="wrap wrap--wide sec__in">
        <Reveal className="cta__in">
          <Logo variant="light" height={26} className="cta__logo" />

          <h2 className="cta__h">
            {'Ready to make your marketing '}
            <br />
            <span className="gtext">workflow smarter?</span>
          </h2>

          <p className="cta__l">
            Create, manage and scale your marketing content with Wytlabs AI — and we will set up
            your brand kit, connect your channels and build the first plan with you.
          </p>

          <div className="cta__b">
            <a className="btn btn--light btn--lg" href={ctas.primary.href}>
              {ctas.primary.label}
              <Icon name="arrowRight" size={16} strokeWidth={2.2} className="btn__arrow" />
            </a>
            <a className="btn btn--outline btn--lg cta__ghost" href={ctas.talk.href}>
              {ctas.talk.label}
            </a>
          </div>

          <p className="cta__f">{billing.trial.line}</p>
        </Reveal>
      </div>
    </section>
  );
}
