import AppShell from './AppShell';
import { Bars, Metric, Row } from './bits';

/**
 * Insights. Figures are illustrative and the toolbar says so — the mockup must
 * never read as a customer result.
 */
export default function InsightsScreen({ dark = false }) {
  return (
    <AppShell
      dark={dark}
      active="insights"
      crumb="Workspace"
      title="Insights"
      url="app.wytlabs.ai/insights"
      label="Wytlabs AI insights — published output and engagement over the last 30 days, shown with sample data"
      actions={
        <>
          <span className="k k--soft">Sample data</span>
          <span className="k k--on app__opt">30 days</span>
          <span className="b app__opt">Export</span>
        </>
      }
    >
      <div className="app__pane">
        <div className="pg pg--3">
          <Metric label="Published" value="86" delta="+18" points={[3, 5, 4, 7, 6, 9, 11]} />
          <Metric label="Saves & shares" value="1,412" delta="+24%" points={[5, 6, 9, 8, 12, 11, 15]} />
          <Metric label="Reach" value="94.6k" delta="+11%" points={[4, 8, 6, 10, 9, 13, 12]} />
        </div>

        <div className="pg pg--21">
          <div className="c">
            <div className="c__h">
              <span className="c__t">Output by week</span>
              <span className="c__m">Items published</span>
            </div>
            <Bars values={[40, 58, 46, 72, 61, 88, 76]} height={72} />
            <div className="pbetween" style={{ marginTop: '0.4rem' }}>
              {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'].map((w) => (
                <span key={w} style={{ fontSize: 8.5, color: 'var(--a-ink-4)' }}>
                  {w}
                </span>
              ))}
            </div>
          </div>

          <div className="c">
            <div className="c__h">
              <span className="c__t">Top performing</span>
              <span className="c__m">By saves</span>
            </div>
            <div className="rows">
              {[
                { i: 'instagram', t: 'Sunrise range carousel', s: 'Instagram · carousel' },
                { i: 'linkedin', t: '36-hour retention test', s: 'LinkedIn · post' },
                { i: 'doc', t: 'Choosing a bottle', s: 'Blog · article' },
                { i: 'mail', t: 'Range launch', s: 'Email · campaign' },
              ].map((r, n) => (
                <Row
                  key={r.t}
                  icon={r.i}
                  title={r.t}
                  sub={r.s}
                  right={
                    <span className="k k--soft" style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {n + 1}
                    </span>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
