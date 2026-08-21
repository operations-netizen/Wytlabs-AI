import Logo from './ui/Logo';
import Icon from './ui/Icon';
import { footer, site, ctas } from '../data/site';
import './Footer.css';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="ft dark">
      <div className="wrap wrap--wide">
        <div className="ft__top">
          <div className="ft__brand">
            {/* Official white wordmark on the dark footer ground. */}
            <Logo variant="light" height={24} />
            <p className="ft__blurb">{footer.blurb}</p>
            <a className="btn btn--primary btn--sm" href={ctas.primary.href}>
              {ctas.primary.label}
            </a>
            <ul className="ft__social">
              {footer.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={`Wytlabs on ${s.label}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon name={s.icon} size={16} strokeWidth={1.9} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="ft__cols" aria-label="Footer">
            {footer.columns.map((c) => (
              <div className="ft__col" key={c.title}>
                <p className="ft__ct">{c.title}</p>
                <ul>
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a className="ft__l" href={l.href}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="ft__bottom">
          <p className="ft__c">
            © {year} {site.brand}. All rights reserved.
          </p>
          <p className="ft__note">
            Wytlabs AI is built on the Blaze AI marketing platform. All other product names and
            logos are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
