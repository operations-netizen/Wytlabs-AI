import Icon from './ui/Icon';
import Reveal from './ui/Reveal';
import Head from './ui/Head';
import { CalendarScreen } from './mockups';
import { platform } from '../data/content';
import './Platform.css';

/**
 * Product introduction: one large interface visual, with the platform's areas
 * called out as labels around it. Replaces the generic four-card row.
 */
export default function Platform() {
  return (
    <section className="sec sec--lg plat" id="platform">
      <div className="wrap wrap--wide">
        <Head
          eyebrow={platform.eyebrow}
          title={platform.title}
          lede={platform.lede}
          variant="split"
        />

        <div className="plat__stage">
          <Reveal className="plat__frame frame">
            <CalendarScreen />
          </Reveal>

          {/* Labels sit in their own column on desktop and become a strip on
              mobile, so nothing ever floats on top of the interface. */}
          <div className="plat__labels">
            {platform.labels.map((l, i) => (
              <Reveal as="article" className="plat__label" key={l.title} delay={i * 80}>
                <span className="plat__icon">
                  <Icon name={l.icon} size={17} strokeWidth={1.8} />
                </span>
                <span className="plat__ltext">
                  <span className="plat__lt">{l.title}</span>
                  <span className="plat__lb">{l.body}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
