import Icon from '../ui/Icon';

/**
 * Application chrome shared by every product visual.
 *
 * The navigation mirrors the real product rather than invented widgets: Home,
 * Calendar, Content Plan, Approvals, Paid Ads, Brand Kit and Insights, plus a
 * Files & Projects group (Create New, Media Library, Projects).
 *
 * `brand` sets the workspace mark and name — the customer's own business, since
 * this is the workspace they work in.
 */

const PRIMARY = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'calendar', label: 'Calendar', icon: 'calendar' },
  { id: 'plan', label: 'Content Plan', icon: 'plan' },
  { id: 'approvals', label: 'Approvals', icon: 'check-circle', n: '4' },
  { id: 'ads', label: 'Paid Ads', icon: 'target' },
  { id: 'brand', label: 'Brand Kit', icon: 'palette' },
  { id: 'insights', label: 'Insights', icon: 'chart' },
];

const FILES = [
  { id: 'create', label: 'Create New', icon: 'sparkles' },
  { id: 'media', label: 'Media Library', icon: 'image' },
  { id: 'projects', label: 'Projects', icon: 'folder', n: '12' },
];

export default function AppShell({
  dark = false,
  active = 'create',
  crumb,
  title,
  actions,
  url = 'app.wytlabs.ai',
  brand = { initials: 'NB', name: 'Northbay Supply', plan: 'Growth' },
  accent,
  chrome = true,
  children,
  label,
}) {
  return (
    <figure
      className={`app ${dark ? 'app--dark' : ''}`.trim()}
      role="img"
      aria-label={label || `${title} — Wytlabs AI workspace`}
      style={accent ? { '--a-accent': accent, '--a-accent-wash': `${accent}1f` } : undefined}
    >
      {chrome && (
        <div className="app__chrome">
          <div className="app__lights" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span className="app__omni">
            <Icon name="lock" size={9} strokeWidth={2.2} />
            {url}
          </span>
        </div>
      )}

      <div className="app__body">
        <aside className="app__rail">
          <div className="app__ws">
            <span
              className="app__ws-mark"
              style={accent ? { background: accent } : undefined}
            >
              {brand.initials}
            </span>
            <span className="app__ws-text">
              <span className="app__ws-name">{brand.name}</span>
              <span className="app__ws-sub">{brand.plan}</span>
            </span>
            <Icon name="chevron" size={11} strokeWidth={2} className="app__ws-caret" />
          </div>

          <div className="app__railscroll">
            <span className="app__new">
              <Icon name="plus" size={11} strokeWidth={2.6} />
              <span>Create</span>
            </span>

            <div className="app__group" aria-hidden="true">
              {PRIMARY.map((n) => (
                <div key={n.id} className={`app__nav ${n.id === active ? 'app__nav--on' : ''}`.trim()}>
                  <Icon name={n.icon} size={13} strokeWidth={1.8} />
                  <span>{n.label}</span>
                  {n.n && <span className="app__nav-n">{n.n}</span>}
                </div>
              ))}
            </div>

            <div className="app__group" aria-hidden="true">
              <p className="app__grouplabel">Files &amp; Projects</p>
              {FILES.map((n) => (
                <div key={n.id} className={`app__nav ${n.id === active ? 'app__nav--on' : ''}`.trim()}>
                  <Icon name={n.icon} size={13} strokeWidth={1.8} />
                  <span>{n.label}</span>
                  {n.n && <span className="app__nav-n">{n.n}</span>}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="app__main">
          <div className="app__top">
            <div style={{ minWidth: 0 }}>
              {crumb && (
                <p className="app__crumb">
                  {crumb}
                  <Icon name="chevron-right" size={9} strokeWidth={2.4} />
                  <span style={{ color: 'var(--a-ink-3)' }}>{title}</span>
                </p>
              )}
              <p className="app__h">{title}</p>
            </div>
            {actions && <div className="app__acts">{actions}</div>}
          </div>
          {children}
        </div>
      </div>
    </figure>
  );
}
