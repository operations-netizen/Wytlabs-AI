import Icon from './ui/Icon';
import Reveal from './ui/Reveal';
import Mockup from './mockups';
import { features } from './../data/content';
import './Features.css';

/**
 * Four feature stories, each with a deliberately different composition so the
 * page never falls into a text→screenshot rhythm:
 *
 *   full   — split header, then the interface full width beneath it
 *   split  — copy left, interface right
 *   flip   — interface left, copy right
 *   labels — wide interface with callout labels anchored to its edges
 */

function Copy({ f, compact = false }) {
  return (
    <>
      <p className="eyebrow feat__eyebrow">
        <span className="eyebrow__idx">{f.n}</span>
        {f.eyebrow}
      </p>
      <h3 className="feat__t">{f.title}</h3>
      <p className="feat__d">{f.body}</p>
      {!compact && (
        <ul className="ticks feat__pts">
          {f.points.map((p) => (
            <li key={p}>
              <Icon name="check" size={16} strokeWidth={2.8} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function Features() {
  return (
    <section className="sec feat" id="features">
      <div className="wrap wrap--wide">
        {features.map((f, i) => {
          const last = i === features.length - 1;

          return (
            <article className={`feat__b feat__b--${f.layout}`} key={f.id} id={f.id}>
              {/* ---- full: header split above a full-width interface ---- */}
              {f.layout === 'full' && (
                <>
                  <Reveal className="feat__head">
                    <div className="feat__headl">
                      <p className="eyebrow feat__eyebrow">
                        <span className="eyebrow__idx">{f.n}</span>
                        {f.eyebrow}
                      </p>
                      <h3 className="feat__t">{f.title}</h3>
                    </div>
                    <div className="feat__headr">
                      <p className="feat__d">{f.body}</p>
                    </div>
                    <ul className="feat__ptsrow">
                      {f.points.map((p) => (
                        <li key={p}>
                          <Icon name="check" size={16} strokeWidth={2.8} />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal className="feat__wide" delay={110}>
                    <div className="frame">
                      <Mockup name={f.mockup} />
                    </div>
                  </Reveal>
                </>
              )}

              {/* ---- split / flip: copy beside the interface ---- */}
              {(f.layout === 'split' || f.layout === 'flip') && (
                <>
                  <Reveal className="feat__copy">
                    <Copy f={f} />
                  </Reveal>
                  <Reveal className="feat__v" delay={110}>
                    <div className="frame feat__frame">
                      <Mockup name={f.mockup} compact />
                    </div>
                  </Reveal>
                </>
              )}

              {/* ---- labels: wide interface with edge callouts ---- */}
              {f.layout === 'labels' && (
                <>
                  <Reveal className="feat__copy feat__copy--lead">
                    <Copy f={f} compact />
                  </Reveal>
                  <Reveal className="feat__stage" delay={110}>
                    <div className="frame feat__stageframe">
                      <Mockup name={f.mockup} />
                    </div>
                    <ul className="feat__labels">
                      {f.labels.map((l) => (
                        <li key={l.t}>
                          <span className="feat__lic">
                            <Icon name={l.icon} size={16} strokeWidth={1.9} />
                          </span>
                          <span>
                            <span className="feat__lt">{l.t}</span>
                            <span className="feat__lb">{l.b}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </>
              )}

              {!last && <hr className="rule feat__rule" />}
            </article>
          );
        })}
      </div>
    </section>
  );
}
