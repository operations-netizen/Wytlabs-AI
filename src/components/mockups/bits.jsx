import Icon from '../ui/Icon';

/** Shared primitives for the product mockups. */

/* Brand-anchored gradients for generated-asset stand-ins. Deep ultramarine
   through signal blue, with a single restrained violet — never a rainbow. */
const PALETTES = [
  ['#162cb9', '#169cf5'],
  ['#0b1470', '#2a4ce8'],
  ['#1e3ad6', '#4db6f9'],
  ['#4a2ec2', '#2a4ce8'],
  ['#0e5f8f', '#169cf5'],
  ['#101f96', '#5b3ad6'],
];

export function Art({ index = 0, icon = null, label, ratio }) {
  const [from, to] = PALETTES[index % PALETTES.length];
  return (
    <span
      className="art"
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        aspectRatio: ratio,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 90" preserveAspectRatio="none">
        <circle cx="100" cy="12" r="28" fill="rgba(255,255,255,0.14)" />
        <circle cx="14" cy="80" r="20" fill="rgba(255,255,255,0.1)" />
        <path d="M0 64L32 42l26 15 30-21 32 19v35H0z" fill="rgba(255,255,255,0.09)" />
      </svg>
      {icon && (
        <span className="art__i">
          <Icon name={icon} size={14} strokeWidth={1.9} />
        </span>
      )}
      {label && <span className="art__l">{label}</span>}
    </span>
  );
}

export function Spark({ points = [4, 7, 5, 9, 8, 12, 11, 15], w = 56, h = 16 }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const step = w / (points.length - 1);
  const d = points
    .map(
      (p, i) =>
        `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)} ${(h - ((p - min) / span) * (h - 2) - 1).toFixed(1)}`
    )
    .join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Bars({ values = [40, 58, 46, 72, 61, 88, 76], height = 56 }) {
  return (
    <span className="bars" style={{ height }} aria-hidden="true">
      {values.map((v, i) => (
        <i key={i} style={{ height: `${v}%` }} />
      ))}
    </span>
  );
}

export function Lines({ widths = ['100%', '94%', '78%'], accent = false }) {
  return (
    <span className={`lines ${accent ? 'lines--accent' : ''}`.trim()} aria-hidden="true">
      {widths.map((w, i) => (
        <i key={i} style={{ width: w }} />
      ))}
    </span>
  );
}

export function Slider({ label, value = 60, display }) {
  return (
    <span className="sl">
      <span className="sl__l">{label}</span>
      <span className="sl__t">
        <span className="sl__f" style={{ width: `${value}%` }} />
        <span className="sl__k" style={{ left: `${value}%` }} />
      </span>
      <span className="sl__v">{display ?? value}</span>
    </span>
  );
}

export function Status({ kind, children }) {
  return (
    <span className={`st st--${kind}`}>
      <i />
      {children}
    </span>
  );
}

export function Metric({ label, value, delta, points }) {
  return (
    <div className="m">
      <div className="m__l">{label}</div>
      <div className="m__v">{value}</div>
      {delta && (
        <div className="m__d">
          <Icon name="arrow-up-right" size={9} strokeWidth={2.6} />
          {delta}
        </div>
      )}
      {points && (
        <div className="m__spark">
          <Spark points={points} />
        </div>
      )}
    </div>
  );
}

export function Row({ icon, title, sub, right }) {
  return (
    <div className="r">
      <span className="r__i">
        <Icon name={icon} size={11} strokeWidth={1.9} />
      </span>
      <span style={{ minWidth: 0 }}>
        <span className="r__t" style={{ display: 'block' }}>
          {title}
        </span>
        <span className="r__s">{sub}</span>
      </span>
      {right}
    </div>
  );
}

export function Thumb({ index, tag, title, meta, square = false }) {
  return (
    <span className="t">
      <span className={`t__art ${square ? 't__art--sq' : ''}`.trim()}>
        {tag && <span className="t__tag">{tag}</span>}
        <Art index={index} />
      </span>
      {(title || meta) && (
        <span className="t__b">
          {title && <span className="t__t">{title}</span>}
          {meta && (
            <span className="t__m">
              <Icon name="check" size={8} strokeWidth={3} />
              {meta}
            </span>
          )}
        </span>
      )}
    </span>
  );
}

export const CHANNELS = ['linkedin', 'instagram', 'facebook', 'x', 'tiktok', 'youtube', 'mail', 'doc'];

export function Channels({ on = 6, all = CHANNELS }) {
  return (
    <span className="ch">
      {all.map((c, i) => (
        <i key={c} className={i < on ? 'on' : ''}>
          <Icon name={c} size={11} strokeWidth={1.9} />
        </i>
      ))}
    </span>
  );
}
