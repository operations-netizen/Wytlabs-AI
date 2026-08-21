import { useState } from 'react';
import Icon from './ui/Icon';
import Reveal from './ui/Reveal';
import Head from './ui/Head';
import { plans, billing, isPlaceholder } from '../data/pricing';
import './Pricing.css';

function saved(p) {
  if (!p.monthly || !p.yearly) return null;
  return Math.round((1 - p.yearly / p.monthly) * 100);
}

export default function Pricing() {
  const [period, setPeriod] = useState('monthly');
  const yearly = period === 'yearly';
  const meta = billing.periods[period];

  const featured = plans.find((p) => p.featured);
  const rest = plans.filter((p) => !p.featured);

  const price = (p) => (yearly ? p.yearly : p.monthly);

  return (
    <section className="sec sec--lg pr" id="pricing">
      <div className="wrap wrap--wide">
        <Head
          eyebrow="Pricing"
          title="Choose the Wytlabs AI plan that fits your team"
          lede="Every plan is the full platform. Tiers differ by volume, channels, brands — and how much of it Wytlabs runs with you."
          variant="split"
        />

        <div className="pr__bar">
          <div className="pr__toggle" role="group" aria-label="Billing period">
            {Object.values(billing.periods).map((p) => (
              <button
                key={p.id}
                type="button"
                className={`pr__tg ${period === p.id ? 'on' : ''}`.trim()}
                aria-pressed={period === p.id}
                onClick={() => setPeriod(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
          <span className={`pr__save ${yearly ? 'on' : ''}`.trim()}>{billing.savings}</span>
          {isPlaceholder && (
            <span className="pr__ind" title="Final Wytlabs pricing is being confirmed">
              Indicative pricing
            </span>
          )}
        </div>

        {/* Recommended plan: the dominant panel. */}
        {featured && (
          <Reveal className="pr__hero">
            <div className="pr__hcol">
              <span className="tag tag--solid pr__badge">
                <Icon name="bolt" size={11} strokeWidth={2.4} />
                {featured.badge}
              </span>
              <h3 className="pr__hname">{featured.name}</h3>
              <p className="pr__htier">{featured.tier}</p>
              <p className="pr__hprice">
                <span className="pr__cur">{billing.symbol}</span>
                <span className="pr__amt">{price(featured)}</span>
                <span className="pr__per">{meta.suffix}</span>
              </p>
              <p className="pr__hsub">
                {yearly ? `${meta.note} · save ${saved(featured)}%` : 'billed monthly'}
              </p>
              <a className="btn btn--light btn--block pr__hcta" href={featured.cta.href}>
                {featured.cta.label}
                <Icon name="arrowRight" size={15} strokeWidth={2.2} className="btn__arrow" />
              </a>
            </div>

            <div className="pr__hcol">
              <p className="pr__hlabel">Best for</p>
              <p className="pr__hbest">{featured.bestFor}</p>
              <dl className="pr__limits pr__limits--dark">
                {featured.limits.map((l) => (
                  <div key={l.k}>
                    <dt>{l.k}</dt>
                    <dd>{l.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="pr__hcol">
              <p className="pr__hlabel">Included</p>
              <ul className="pr__hfeats">
                {featured.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={14} strokeWidth={3} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        {/* The other three as columns. Content is trimmed so a whole plan
            still reads inside one screen. */}
        <div className="pr__cols">
          {rest.map((p, i) => {
            const amount = price(p);
            const pct = saved(p);

            return (
              <Reveal as="article" className="pr__col" key={p.id} delay={i * 70}>
                <span className="pr__flag">
                  {p.badge && <span className="pr__cbadge">{p.badge}</span>}
                </span>

                <h3 className="pr__cname">{p.name}</h3>
                <p className="pr__ctier">{p.tier}</p>

                <p className="pr__cprice">
                  {amount == null ? (
                    <span className="pr__amt pr__amt--word">{p.priceLabel}</span>
                  ) : (
                    <>
                      <span className="pr__cur">{billing.symbol}</span>
                      <span className="pr__amt">{amount}</span>
                      <span className="pr__per">{meta.suffix}</span>
                    </>
                  )}
                </p>
                <p className="pr__csub">
                  {amount == null
                    ? p.priceNote
                    : yearly
                      ? `${meta.note} · save ${pct}%`
                      : 'billed monthly'}
                </p>

                <p className="pr__cbest">{p.bestFor}</p>

                <a className="btn btn--outline btn--block" href={p.cta.href}>
                  {p.cta.label}
                </a>

                <dl className="pr__climits">
                  {p.limits.map((l) => (
                    <div key={l.k}>
                      <dt>{l.k}</dt>
                      <dd>{l.v}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="pr__cfeats">
                  {p.features.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={13} strokeWidth={3} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
