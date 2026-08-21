import Icon from './ui/Icon';
import Reveal from './ui/Reveal';
import Head from './ui/Head';
import { Art } from './mockups/bits';
import { transform } from '../data/content';
import './Transform.css';

/**
 * The campaign transformation: one brief fans out into every asset, then
 * converges on one approved schedule. Built from real product UI cards rather
 * than icons, with SVG connectors drawn behind them.
 *
 * Labels occupy their own grid row so all three sit on a single baseline while
 * the content row stays vertically centred on the connectors.
 * Desktop: three stages left→right. Mobile: one vertical spine.
 */

function Wire({ dir }) {
  const id = `tf-${dir}`;
  const rows = [40, 120, 200, 280];
  return (
    <svg
      className={`tf__wire tf__wire--${dir}`}
      viewBox="0 0 100 320"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={dir === 'fan' ? '#162cb9' : '#169cf5'} stopOpacity="0.2" />
          <stop offset="100%" stopColor={dir === 'fan' ? '#169cf5' : '#162cb9'} stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {rows.map((y, i) => (
        <path
          key={y}
          d={dir === 'fan' ? `M0 160 C 58 160, 42 ${y}, 100 ${y}` : `M0 ${y} C 58 ${y}, 42 160, 100 160`}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth="1.5"
          style={{ animationDelay: `${i * 110}ms` }}
        />
      ))}
    </svg>
  );
}

export default function Transform() {
  return (
    <section className="sec sec--lg tf" id="transform">
      <span className="aura tf__aura" aria-hidden="true" />

      <div className="wrap wrap--wide sec__in">
        <Head
          eyebrow="One brief, one campaign"
          title={transform.title}
          lede={transform.lede}
          variant="split"
        />

        <div className="tf__flow uiscope">
          {transform.stages.map((label, i) => (
            <Reveal as="p" className={`tf__label tf__label--${i + 1}`} key={label} delay={i * 100}>
              <span className="tf__num">{`0${i + 1}`}</span>
              {label}
            </Reveal>
          ))}

          <Reveal className="tf__cell tf__cell--1">
            <div className="tf__brief">
              <span className="q__l">Brief</span>
              <p className="tf__brieft">
                {transform.brief}
                <span className="caret" />
              </p>
              <div className="prow">
                <span className="k k--on">
                  <Icon name="palette" size={10} strokeWidth={2.2} />
                  Brand voice
                </span>
                <span className="b b--pri" style={{ marginLeft: 'auto' }}>
                  <Icon name="sparkles" size={10} strokeWidth={2.2} />
                  Generate
                </span>
              </div>
            </div>
          </Reveal>

          <Wire dir="fan" />

          <Reveal className="tf__cell tf__cell--2" delay={120}>
            <div className="tf__outs">
              {transform.outputs.map((o, i) => (
                <article className="tf__out" key={o.title}>
                  <span className="tf__outart">
                    <Art index={i} />
                  </span>
                  <span className="tf__outb">
                    <span className="tf__outk">
                      <Icon name={o.icon} size={11} strokeWidth={2} />
                      {o.kind}
                    </span>
                    <span className="tf__outt">{o.title}</span>
                  </span>
                </article>
              ))}
            </div>
          </Reveal>

          <Wire dir="join" />

          <Reveal className="tf__cell tf__cell--3" delay={240}>
            <div className="tf__ship">
              <div className="tf__shiph">
                <Icon name="calendar" size={13} strokeWidth={2} />
                <span>Week of 16 March</span>
                <span className="st st--go" style={{ marginLeft: 'auto' }}>
                  <i />
                  Queued
                </span>
              </div>
              <ul className="tf__queue">
                {transform.queue.map((q) => (
                  <li key={q.t}>
                    <Icon name={q.icon} size={12} strokeWidth={1.9} />
                    <span className="tf__qt">{q.t}</span>
                    <span className="tf__qm">{q.when}</span>
                  </li>
                ))}
              </ul>
              <p className="tf__shipf">
                <Icon name="check-circle" size={12} strokeWidth={2.2} />
                Approved, then published automatically
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
