import { useState } from 'react';
import Reveal from './ui/Reveal';
import Head from './ui/Head';
import Mockup from './mockups';
import Icon from './ui/Icon';
import { showcase, showcasePillars as pillars } from '../data/content';
import './Showcase.css';

/** Dark product showcase — a real tablist, one screen mounted at a time. */
export default function Showcase() {
  const [active, setActive] = useState(showcase[0].id);
  const cur = showcase.find((t) => t.id === active) ?? showcase[0];

  const onKey = (e) => {
    const i = showcase.findIndex((t) => t.id === active);
    if (e.key === 'ArrowRight') setActive(showcase[(i + 1) % showcase.length].id);
    if (e.key === 'ArrowLeft') setActive(showcase[(i - 1 + showcase.length) % showcase.length].id);
  };

  return (
    <section className="sec sec--lg show dark" id="showcase">
      <span className="mesh" aria-hidden="true" />
      <span className="aura show__aura" aria-hidden="true" />

      <div className="wrap wrap--wide sec__in">
        <Head
          eyebrow="Inside the workspace"
          title="One workspace. Your entire marketing workflow."
          lede="The surfaces your team actually works in — review queue, project library and the numbers that shape next month."
          variant="split"
        />

        <div className="show__tabs" role="tablist" aria-label="Product screens" onKeyDown={onKey}>
          {showcase.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`show-t-${t.id}`}
              aria-selected={t.id === active}
              aria-controls={`show-p-${t.id}`}
              tabIndex={t.id === active ? 0 : -1}
              className={`show__tab ${t.id === active ? 'on' : ''}`.trim()}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* The dashboard is the focus: full width, with the active screen's
            summary and the workspace pillars called out beside it. */}
        <div className="show__stage">
          <Reveal
            className="frame show__frame"
            id={`show-p-${cur.id}`}
            role="tabpanel"
            aria-labelledby={`show-t-${cur.id}`}
            key={cur.id}
          >
            <Mockup name={cur.mockup} dark />
          </Reveal>

          <div className="show__side">
            <h3 className="show__st">{cur.title}</h3>
            <p className="show__body">{cur.body}</p>
            <ul className="show__pills">
              {pillars.map((p) => (
                <li key={p.t}>
                  <span className="show__pi">
                    <Icon name={p.icon} size={15} strokeWidth={1.9} />
                  </span>
                  <span>
                    <span className="show__pt">{p.t}</span>
                    <span className="show__pb">{p.b}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
