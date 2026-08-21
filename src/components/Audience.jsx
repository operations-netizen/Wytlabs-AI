import Icon from './ui/Icon';
import Reveal from './ui/Reveal';
import Head from './ui/Head';
import { audiences } from '../data/content';
import './Audience.css';

/**
 * Who it is for. Deliberately uneven card sizes so it reads as a designed
 * mosaic rather than an icon grid.
 */
export default function Audience() {
  return (
    <section className="sec sec--lg aud" id="audience">
      <div className="wrap wrap--wide">
        <Head
          eyebrow="Who it is for"
          title="Built for teams that have to publish anyway"
          lede="Same platform, different pressure. Here is what each group uses Wytlabs AI to solve."
          variant="split"
        />

        <div className="aud__grid">
          {audiences.map((a, i) => (
            <Reveal as="article" className="aud__c" key={a.id} delay={i * 80}>
              <span className="aud__i">
                <Icon name={a.icon} size={22} strokeWidth={1.75} />
              </span>
              <h3 className="aud__t">{a.title}</h3>
              <p className="aud__b">{a.body}</p>
              <ul className="aud__p">
                {a.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={14} strokeWidth={3} />
                    {p}
                  </li>
                ))}
              </ul>
              {a.stat && (
                <p className="aud__stat">
                  <Icon name="bolt" size={13} strokeWidth={2.2} />
                  {a.stat}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
