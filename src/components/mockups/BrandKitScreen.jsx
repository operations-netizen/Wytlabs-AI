import AppShell from './AppShell';
import Icon from '../ui/Icon';
import { Art, Slider } from './bits';

/**
 * Brand Kit — the documented sections: Source Materials, Image & Video Assets,
 * Brand Profile, Styles & Voice, Content Preferences.
 */
export default function BrandKitScreen({ dark = false }) {
  return (
    <AppShell
      dark={dark}
      active="brand"
      crumb="Workspace"
      title="Brand Kit"
      url="app.wytlabs.ai/brand-kit"
      label="Wytlabs AI Brand Kit — source materials, visual style, brand voice controls and asset library"
      actions={
        <>
          <span className="k k--soft app__opt">
            <Icon name="link" size={9} strokeWidth={2.2} />
            Rescan site
          </span>
          <span className="b b--pri">Save</span>
        </>
      }
    >
      <div className="app__pane">
        <div className="prow" style={{ gap: '0.3rem' }}>
          <span className="k k--on">Styles &amp; Voice</span>
          <span className="k app__opt">Brand Profile</span>
          <span className="k app__opt">Source Materials</span>
          <span className="k app__opt">Content Preferences</span>
        </div>

        <div className="pg pg--11">
          <div className="pstack">
            <div className="c">
              <div className="c__h">
                <span className="c__t">Visual style</span>
                <span className="c__m">From northbaysupply.com</span>
              </div>
              <p
                style={{
                  fontSize: 8.5,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--a-ink-4)',
                  marginBottom: '0.35rem',
                }}
              >
                Palette
              </p>
              <div className="sw swgrid">
                {['#0b1224', '#162cb9', '#2a4ce8', '#169cf5', '#0e8f6f', '#c9922b', '#eef1f6'].map(
                  (c) => (
                    <i key={c} style={{ background: c }} title={c} />
                  )
                )}
              </div>

              <p
                style={{
                  fontSize: 8.5,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--a-ink-4)',
                  margin: '0.7rem 0 0.35rem',
                }}
              >
                Typography
              </p>
              <div style={{ display: 'grid', gap: '0.3rem' }}>
                {[
                  { n: 'Söhne Bold', r: 'Headings', w: 700 },
                  { n: 'Inter Regular', r: 'Body', w: 400 },
                ].map((f) => (
                  <span
                    key={f.n}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                      padding: '0.4rem 0.55rem',
                      border: '1px solid var(--a-line)',
                      borderRadius: 2,
                    }}
                  >
                    <span style={{ fontSize: 12, fontWeight: f.w, letterSpacing: '-0.01em' }}>
                      {f.n}
                    </span>
                    <span
                      style={{
                        fontSize: 8.5,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--a-ink-4)',
                      }}
                    >
                      {f.r}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <div className="c app__opt">
              <div className="c__h">
                <span className="c__t">Assets</span>
                <span className="c__m">126 files</span>
              </div>
              <div className="th th--3">
                {[
                  { i: 0, l: 'Product' },
                  { i: 2, l: 'Lifestyle' },
                  { i: 4, l: 'Packaging' },
                ].map((t) => (
                  <span className="t" key={t.l} style={{ overflow: 'hidden' }}>
                    <span className="t__art t__art--sq">
                      <Art index={t.i} label={t.l} />
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pstack">
            <div className="c">
              <div className="c__h">
                <span className="c__t">Brand voice</span>
                <span className="k k--on">Active</span>
              </div>
              <div style={{ display: 'grid', gap: '0.45rem' }}>
                <Slider label="Formal" value={36} display="36" />
                <Slider label="Warm" value={68} display="68" />
                <Slider label="Technical" value={54} display="54" />
                <Slider label="Concise" value={81} display="81" />
              </div>

              <p
                style={{
                  fontSize: 8.5,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--a-ink-4)',
                  margin: '0.75rem 0 0.35rem',
                }}
              >
                Preferred phrases
              </p>
              <div className="prow" style={{ gap: '0.25rem' }}>
                {['built to last', 'field-tested', 'no compromise'].map((t) => (
                  <span className="k k--soft" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontSize: 8.5,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--a-ink-4)',
                  margin: '0.6rem 0 0.35rem',
                }}
              >
                Never use
              </p>
              <div className="prow" style={{ gap: '0.25rem' }}>
                {['revolutionary', 'game-changing', 'cheap'].map((t) => (
                  <span className="k k--soft" key={t} style={{ opacity: 0.7 }}>
                    <Icon name="close" size={8} strokeWidth={2.6} />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="c c--panel">
              <div className="c__h">
                <span className="c__t">Source materials</span>
                <span className="c__m">8 sources</span>
              </div>
              <div style={{ display: 'grid', gap: '0.3rem' }}>
                {[
                  { i: 'globe', t: 'northbaysupply.com', s: '42 pages indexed' },
                  { i: 'doc', t: 'Brand guidelines 2026.pdf', s: 'Uploaded' },
                ].map((s) => (
                  <span
                    key={s.t}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', minWidth: 0 }}
                  >
                    <Icon name={s.i} size={11} strokeWidth={1.9} style={{ color: 'var(--a-ink-3)', flex: 'none' }} />
                    <span style={{ minWidth: 0 }}>
                      <span className="r__t" style={{ display: 'block' }}>
                        {s.t}
                      </span>
                      <span className="r__s">{s.s}</span>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
