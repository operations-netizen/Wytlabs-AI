import { partners } from '../data/site';
import './TrustBar.css';

/**
 * Trust band: an infinite, seamless logo marquee, matching the strip on
 * wytlabs.com.
 *
 * How the seam stays invisible: the set is rendered COPIES times in a track
 * that translates by exactly -(100 / COPIES)% — one set's width. At the end of
 * the cycle copy N sits precisely where copy N-1 began, so the reset is
 * undetectable at any width, with no snap and no drift.
 *
 * Why four copies and not two: five logos are roughly 1030px, which is
 * narrower than the strip's own viewport on a wide screen. Two copies would
 * run out of track before the cycle closed and show a gap. Four guarantees
 * three sets of runway ahead of the window at any realistic screen width, and
 * costs nothing extra — it is the same five files, served from cache.
 *
 * Only copy 0 is exposed to assistive tech, so each partner is announced once.
 * Motion is a single compositor-only transform; it pauses on hover and is
 * replaced by a static row under prefers-reduced-motion.
 */
const COPIES = 4;

export default function TrustBar() {
  return (
    <section className="trust" aria-label="Wytlabs partner credentials">
      <div className="trust__in wrap wrap--wide">
        <p className="trust__label">Trusted by:</p>

        <div className="trust__vp">
          <div className="trust__track" style={{ '--trust-copies': COPIES }}>
            {Array.from({ length: COPIES }, (_, copy) => (
              <ul className="trust__set" key={copy} aria-hidden={copy > 0 ? 'true' : undefined}>
                {partners.map((p) => (
                  <li className="trust__item" key={p.src}>
                    <img
                      className="trust__logo"
                      src={p.src}
                      alt={copy === 0 ? p.alt : ''}
                      width={p.w}
                      height={p.h}
                      /* In the hero fold — lazy would pop in after paint. */
                      loading="eager"
                      decoding="async"
                      draggable="false"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

