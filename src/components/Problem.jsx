import Icon from './ui/Icon';
import Reveal from './ui/Reveal';
import Head from './ui/Head';
import { problem } from '../data/content';
import './Problem.css';

/**
 * The story opens on the problem, so the product has something to answer.
 * Numbered editorial columns divided by hairlines — a ghosted numeral behind
 * each one, and a closing line that bridges into the platform section.
 */
export default function Problem() {
  return (
    <section className="sec prob" id="problem">
      <span className="mesh prob__mesh" aria-hidden="true" />
      <span className="aura prob__aura" aria-hidden="true" />

      <div className="wrap wrap--wide sec__in">
        <Head
          eyebrow={problem.eyebrow}
          title={problem.title}
          lede={problem.lede}
          variant="split"
        />

        <div className="prob__grid">
          {problem.points.map((p, i) => (
            <Reveal as="article" className="prob__item" key={p.n} delay={i * 90}>
              <span className="prob__ghost" aria-hidden="true">
                {p.n}
              </span>
              <span className="prob__head">
                <span className="prob__icon">
                  <Icon name={p.icon} size={19} strokeWidth={1.8} />
                </span>
                <span className="prob__n">{p.n}</span>
              </span>
              <h3 className="prob__t">{p.title}</h3>
              <p className="prob__b">{p.body}</p>
              <p className="prob__cost">{p.cost}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="prob__bridge">
          <span className="prob__brule" aria-hidden="true" />
          <p>{problem.bridge}</p>
        </Reveal>
      </div>
    </section>
  );
}
