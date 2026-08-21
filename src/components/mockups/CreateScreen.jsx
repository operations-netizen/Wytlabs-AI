import AppShell from './AppShell';
import Icon from '../ui/Icon';
import { Art, Channels, Lines, Row, Status } from './bits';

/**
 * Content creation: a brief goes in, an on-brand draft plus channel variants
 * come out. The hero visual and the AI-content feature block.
 */
export default function CreateScreen({ dark = false, compact = false }) {
  return (
    <AppShell
      dark={dark}
      active="create"
      crumb="Projects"
      title="Spring range launch"
      url="app.wytlabs.ai/create"
      label="Wytlabs AI content creation — a brief, an on-brand generated draft, channel variants and a live post preview"
      actions={
        <>
          <span className="k k--soft app__opt">
            <Icon name="bolt" size={9} strokeWidth={2.4} />
            1,284 credits
          </span>
          <span className="b app__opt">Save</span>
          <span className="b b--pri">
            <Icon name="send" size={10} strokeWidth={2.2} />
            Publish
          </span>
        </>
      }
    >
      <div className="app__pane">
        <div className="q q--live">
          <span className="q__l">Brief</span>
          <span className="q__t">
            Launch the insulated bottle range — five social posts, one newsletter and a blog
            article, positioned on 36-hour cold retention<span className="caret" />
          </span>
          <span className="prow">
            <span className="k k--on">
              <Icon name="palette" size={9} strokeWidth={2.2} />
              Northbay brand voice
            </span>
            <span className="k app__opt">
              <Icon name="globe" size={9} strokeWidth={2.2} />
              English (UK)
            </span>
            <span className="k app__opt">
              <Icon name="image" size={9} strokeWidth={2.2} />
              Visuals on
            </span>
            <span className="b b--pri" style={{ marginLeft: 'auto' }}>
              <Icon name="sparkles" size={10} strokeWidth={2.2} />
              Generate
            </span>
          </span>
        </div>

        <div className="pg pg--21">
          <div className="pstack">
            <div className="c">
              <div className="c__h">
                <span className="c__t">Draft</span>
                <Status kind="warn">Needs review</Status>
                <span className="c__m">4 variants</span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3,
                }}
              >
                Cold stays cold. All day, every day.
              </p>
              <Lines widths={['100%', '97%', '92%', '58%']} accent />
              <div className="prow" style={{ marginTop: '0.65rem' }}>
                <span className="b">
                  <Icon name="pen" size={9} strokeWidth={2.2} />
                  Edit
                </span>
                <span className="b">
                  <Icon name="refresh" size={9} strokeWidth={2.2} />
                  Regenerate
                </span>
                <span className="b b--soft">
                  <Icon name="layers3" size={9} strokeWidth={2.2} />
                  Turn into
                </span>
              </div>
            </div>

            <div className="pg pg--11">
              <div className="c c--panel">
                <div className="c__h">
                  <span className="c__t">Channels</span>
                  <span className="c__m">6 of 10</span>
                </div>
                <Channels on={6} />
              </div>
              <div className="c c--panel">
                <div className="c__h">
                  <span className="c__t">Brand check</span>
                  <span className="c__m">Passed</span>
                </div>
                <div style={{ display: 'grid', gap: '0.3rem' }}>
                  {['Voice & tone', 'Palette', 'Approved terms'].map((t) => (
                    <span
                      key={t}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: 10,
                        color: 'var(--a-ink-2)',
                      }}
                    >
                      <Icon name="check-circle" size={11} strokeWidth={2} style={{ color: 'var(--a-good)' }} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {!compact && (
              <div className="c">
                <div className="c__h">
                  <span className="c__t">Also in this batch</span>
                  <span className="c__m">3 items</span>
                </div>
                <div className="rows">
                  <Row
                    icon="doc"
                    title="Blog: how to choose an insulated bottle"
                    sub="1,200 words · 3 credits"
                    right={<Status kind="go">Writing</Status>}
                  />
                  <Row
                    icon="mail"
                    title="Newsletter: range launch"
                    sub="Email · 3 credits"
                    right={<Status kind="go">Queued</Status>}
                  />
                  <Row
                    icon="video"
                    title="Reel script: the 36-hour test"
                    sub="Short-form · 45s"
                    right={<Status kind="hold">Draft</Status>}
                  />
                </div>
                <div className="bar" style={{ marginTop: '0.6rem' }}>
                  <i />
                </div>
              </div>
            )}
          </div>

          <div className="post">
            <div className="post__h">
              <span className="app__av">NB</span>
              <span style={{ minWidth: 0 }}>
                <span className="post__n">Northbay Supply</span>
                <span className="post__u">@northbaysupply</span>
              </span>
              <span className="k k--soft" style={{ marginLeft: 'auto' }}>
                Preview
              </span>
            </div>
            <div className="post__art">
              <Art index={0} icon="image" label="Brand palette applied" />
            </div>
            <div className="post__b">
              <p className="post__t">
                36 hours cold. Zero condensation. The new insulated range is here.
              </p>
              <div className="post__a">
                <Icon name="heart" size={11} strokeWidth={1.9} />
                <Icon name="repeat" size={11} strokeWidth={1.9} />
                <Icon name="bookmark" size={11} strokeWidth={1.9} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
