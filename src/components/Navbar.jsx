import { useEffect, useRef, useState } from 'react';
import Logo from './ui/Logo';
import Icon from './ui/Icon';
import { navLinks, ctas } from '../data/site';
import './Navbar.css';

/**
 * The header sits transparently inside the dark hero and only takes on a
 * backdrop once the page scrolls, so the hero reads as one composition.
 */
export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`.trim()}>
      <div className="nav__in wrap wrap--wide">
        {/* Official white wordmark — the header always sits on a dark ground. */}
        <a className="nav__brand" href="#top" aria-label="Wytlabs AI — home">
          <Logo variant="light" height={22} priority />
        </a>

        <nav className="nav__links" aria-label="Main">
          {navLinks.map((l) => (
            <a className="nav__link" href={l.href} key={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__acts">
          <a className="btn btn--primary btn--sm" href={ctas.primary.href}>
            {ctas.primary.label}
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="nav__burger"
          aria-expanded={open}
          aria-controls="nav-drawer"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={20} strokeWidth={1.9} />
        </button>
      </div>

      <div
        className={`nav__scrim ${open ? 'on' : ''}`.trim()}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div id="nav-drawer" className={`nav__drawer ${open ? 'on' : ''}`.trim()} hidden={!open}>
        <nav className="nav__dlinks" aria-label="Mobile">
          {navLinks.map((l, i) => (
            <a className="nav__dlink" href={l.href} key={l.href} onClick={() => setOpen(false)}>
              <span className="nav__dnum">{String(i + 1).padStart(2, '0')}</span>
              {l.label}
              <Icon name="arrow-up-right" size={16} strokeWidth={1.9} />
            </a>
          ))}
        </nav>
        <div className="nav__dacts">
          <a className="btn btn--primary btn--block" href={ctas.primary.href} onClick={() => setOpen(false)}>
            {ctas.primary.label}
          </a>
        </div>
      </div>
    </header>
  );
}
