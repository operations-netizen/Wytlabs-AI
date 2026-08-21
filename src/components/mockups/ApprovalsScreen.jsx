import AppShell from './AppShell';
import Icon from '../ui/Icon';
import { Art, Lines } from './bits';

/**
 * Approvals — the review queue documented on the Growth plan. Content waits
 * here for a person to approve before it publishes.
 */
export default function ApprovalsScreen({ dark = false }) {
  return (
    <AppShell
      dark={dark}
      active="approvals"
      crumb="Workspace"
      title="Approvals"
      url="app.wytlabs.ai/approvals"
      label="Wytlabs AI approvals queue — content awaiting review, with inline comments and approve or request-changes actions"
      actions={
        <>
          <span className="k k--soft app__opt">4 waiting</span>
          <span className="b app__opt">Request changes</span>
          <span className="b b--pri">
            <Icon name="check" size={10} strokeWidth={2.6} />
            Approve
          </span>
        </>
      }
    >
      <div className="app__pane">
        <div className="pg pg--12">
          <div className="pstack">
            {[
              { t: 'Sunrise range carousel', c: 'Instagram · 4 slides', on: true },
              { t: 'Range launch newsletter', c: 'Email · 8,400 recipients' },
              { t: 'Field-tested post', c: 'LinkedIn · single' },
              { t: 'Spring promo tiles', c: 'Creative · 6 sizes' },
            ].map((i) => (
              <div
                key={i.t}
                className="c"
                style={
                  i.on
                    ? {
                        borderColor: 'var(--a-accent)',
                        boxShadow: 'inset 2px 0 0 var(--a-accent)',
                      }
                    : undefined
                }
              >
                <div className="pbetween">
                  <span style={{ minWidth: 0 }}>
                    <span className="r__t" style={{ display: 'block' }}>
                      {i.t}
                    </span>
                    <span className="r__s">{i.c}</span>
                  </span>
                  {i.on && <Icon name="chevron-right" size={12} strokeWidth={2.2} style={{ color: 'var(--a-accent)', flex: 'none' }} />}
                </div>
              </div>
            ))}
          </div>

          <div className="pstack">
            <div className="c c--flat">
              <div className="post__art" style={{ aspectRatio: '16 / 8' }}>
                <Art index={2} icon="image" label="Slide 1 of 4" />
              </div>
              <div style={{ padding: '0.7rem' }}>
                <p style={{ fontSize: 12, fontWeight: 700, marginBottom: '0.4rem' }}>
                  Sunrise range carousel
                </p>
                <Lines widths={['100%', '88%']} />
              </div>
            </div>

            <div className="c">
              <div className="c__h">
                <span className="c__t">Comments</span>
                <span className="c__m">2</span>
              </div>
              <div style={{ display: 'grid', gap: '0.55rem' }}>
                {[
                  { a: 'SR', n: 'Sam Rowe', t: 'Swap slide 3 for the packaging shot.' },
                  { a: 'JD', n: 'Jo Deane', t: 'Approved copy — visuals still to check.' },
                ].map((c) => (
                  <span key={c.n} style={{ display: 'flex', gap: '0.45rem', minWidth: 0 }}>
                    <span className="app__av" style={{ marginTop: 1 }}>
                      {c.a}
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: 'block', fontSize: 10, fontWeight: 700 }}>{c.n}</span>
                      <span style={{ fontSize: 10, color: 'var(--a-ink-2)', lineHeight: 1.45 }}>
                        {c.t}
                      </span>
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
