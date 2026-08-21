import AppShell from './AppShell';
import Icon from '../ui/Icon';
import { Channels, Row, Status } from './bits';

const SCHEDULED = { 3: 2, 5: 1, 8: 3, 9: 1, 12: 2, 15: 3, 16: 1, 19: 2, 22: 3, 23: 1, 26: 2, 29: 1, 30: 2 };
const TODAY = 15;

export default function CalendarScreen({ dark = false }) {
  return (
    <AppShell
      dark={dark}
      active="calendar"
      crumb="Workspace"
      title="Calendar"
      url="app.wytlabs.ai/calendar"
      label="Wytlabs AI calendar — a month of scheduled content across every connected channel"
      actions={
        <>
          <span className="k k--on">Month</span>
          <span className="k app__opt">Week</span>
          <span className="b app__opt">
            <Icon name="filter" size={9} strokeWidth={2.2} />
            Filter
          </span>
        </>
      }
    >
      <div className="app__pane">
        <div className="pg pg--21">
          <div className="c">
            <div className="c__h">
              <span className="c__t">March 2026</span>
              <span className="c__m">34 scheduled · 13 active days</span>
            </div>
            <div className="cal">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <span className="cal__d" key={i}>
                  {d}
                </span>
              ))}
              {Array.from({ length: 35 }, (_, idx) => {
                const day = idx - 1;
                const inMonth = day >= 1 && day <= 31;
                const n = SCHEDULED[day] || 0;
                return (
                  <span
                    key={idx}
                    className={[
                      'cal__c',
                      n ? 'cal__c--has' : '',
                      day === TODAY ? 'cal__c--now' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    style={!inMonth ? { opacity: 0.28 } : undefined}
                  >
                    {inMonth ? day : ''}
                    {n > 0 && (
                      <span className="cal__p">
                        {Array.from({ length: n }, (_, p) => (
                          <i key={p} />
                        ))}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="pstack">
            <div className="c c--panel">
              <div className="c__h">
                <span className="c__t">This month</span>
              </div>
              <div style={{ display: 'grid', gap: '0.35rem' }}>
                {[
                  ['Social posts', '21'],
                  ['Blog articles', '4'],
                  ['Email campaigns', '5'],
                  ['Paid ad sets', '4'],
                ].map(([k, v]) => (
                  <span className="pbetween" key={k}>
                    <span style={{ fontSize: 10, color: 'var(--a-ink-2)' }}>{k}</span>
                    <strong style={{ fontSize: 11, fontVariantNumeric: 'tabular-nums' }}>{v}</strong>
                  </span>
                ))}
              </div>
            </div>

            <div className="c app__opt">
              <div className="c__h">
                <span className="c__t">Connected</span>
                <span className="c__m">8 of 10</span>
              </div>
              <Channels on={8} />
            </div>
          </div>
        </div>

        <div className="c">
          <div className="c__h">
            <span className="c__t">Up next</span>
            <span className="c__m">Auto-publish on</span>
          </div>
          <div className="rows">
            <Row icon="linkedin" title="Field-tested: 36-hour cold retention" sub="LinkedIn · Tue 09:30" right={<Status kind="go">Scheduled</Status>} />
            <Row icon="instagram" title="Sunrise range carousel" sub="Instagram · Tue 12:00" right={<Status kind="go">Scheduled</Status>} />
            <Row icon="mail" title="Range launch newsletter" sub="Email · Wed 07:00" right={<Status kind="warn">Approval</Status>} />
            <Row icon="doc" title="Choosing an insulated bottle" sub="Blog · Thu 08:00" right={<Status kind="hold">Draft</Status>} />
            <Row icon="youtube" title="The 36-hour test — short" sub="YouTube · Fri 17:00" right={<Status kind="live">Published</Status>} />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
