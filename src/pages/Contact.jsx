import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/ui/Icon';
import Reveal from '../components/ui/Reveal';
import { contact, INBOX, hasEndpoint } from '../data/contact';
import { site } from '../data/site';
import './Contact.css';

/**
 * Contact page — the destination for every "Talk to Wytlabs" CTA.
 *
 * Composition mirrors the product page: dark band carrying the ask, light
 * surface carrying the work. The form sits on the light side because that is
 * where the page expects you to act.
 *
 * Submission is not wired to a backend (see src/data/contact.js). Rather than
 * fake a success state, submit hands the enquiry to the visitor's mail client
 * with everything they typed already in the body, so nothing they wrote is
 * lost. Swap in a real endpoint and flip `hasEndpoint`.
 */

const FIELDS = [
  { id: 'name', label: 'Your name', type: 'text', required: true, autoComplete: 'name' },
  { id: 'email', label: 'Work email', type: 'email', required: true, autoComplete: 'email' },
  { id: 'company', label: 'Company', type: 'text', required: true, autoComplete: 'organization' },
  { id: 'website', label: 'Website', type: 'url', required: false, placeholder: 'yourbrand.com' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const lines = [
      `Name: ${d.get('name') || ''}`,
      `Email: ${d.get('email') || ''}`,
      `Company: ${d.get('company') || ''}`,
      `Website: ${d.get('website') || ''}`,
      `Team size: ${d.get('team') || ''}`,
      `Enquiry: ${d.get('reason') || ''}`,
      '',
      `${d.get('message') || ''}`,
    ].join('\n');

    if (!hasEndpoint) {
      const subject = `Wytlabs AI enquiry — ${d.get('company') || 'new enquiry'}`;
      window.location.href =
        `mailto:${INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    }
    setSent(true);
  }

  return (
    <>
      <Navbar />

      <main className="ct">
        <section className="ct__top dark">
          <span className="mesh ct__mesh" aria-hidden="true" />
          <span className="aura ct__aura" aria-hidden="true" />

          <div className="wrap ct__topin">
            <Reveal>
              <p className="eyebrow ct__eyebrow">
                <span className="eyebrow__bar" />
                {contact.eyebrow}
              </p>
              <h1 className="ct__h1">{contact.title}</h1>
              <p className="ct__lede">{contact.lede}</p>
            </Reveal>
          </div>
        </section>

        <section className="ct__body">
          <div className="wrap ct__grid">
            {/* ---- The form ---- */}
            <Reveal className="ct__panel">
              {sent ? (
                <div className="ct__done" role="status">
                  <span className="ct__donei">
                    <Icon name="check" size={22} strokeWidth={2.6} />
                  </span>
                  <h2 className="ct__doneh">Your enquiry is ready to send</h2>
                  <p className="ct__donep">
                    We have opened your mail client with the details filled in — press send and it
                    reaches the Wytlabs team. If nothing opened, email us directly at{' '}
                    <a className="ct__mail" href={`mailto:${INBOX}`}>
                      {INBOX}
                    </a>
                    .
                  </p>
                  <button className="btn btn--outline" type="button" onClick={() => setSent(false)}>
                    Back to the form
                  </button>
                </div>
              ) : (
                <form className="ct__form" onSubmit={handleSubmit} noValidate={false}>
                  <div className="ct__rows">
                    {FIELDS.map((f) => (
                      <p className="ct__f" key={f.id}>
                        <label className="ct__l" htmlFor={f.id}>
                          {f.label}
                          {!f.required && <span className="ct__opt"> (optional)</span>}
                        </label>
                        <input
                          className="ct__in"
                          id={f.id}
                          name={f.id}
                          type={f.type}
                          required={f.required}
                          autoComplete={f.autoComplete}
                          placeholder={f.placeholder}
                        />
                      </p>
                    ))}

                    <p className="ct__f">
                      <label className="ct__l" htmlFor="team">
                        Team size
                      </label>
                      <select className="ct__in ct__sel" id="team" name="team" defaultValue="">
                        <option value="" disabled>
                          Select…
                        </option>
                        {contact.teamSizes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </p>

                    <p className="ct__f">
                      <label className="ct__l" htmlFor="reason">
                        What can we help with
                      </label>
                      <select className="ct__in ct__sel" id="reason" name="reason" defaultValue="">
                        <option value="" disabled>
                          Select…
                        </option>
                        {contact.reasons.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </p>

                    <p className="ct__f ct__f--wide">
                      <label className="ct__l" htmlFor="message">
                        What are you publishing today
                        <span className="ct__opt"> (optional)</span>
                      </label>
                      <textarea
                        className="ct__in ct__ta"
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Channels, volume, who reviews it — whatever helps us come prepared."
                      />
                    </p>
                  </div>

                  <div className="ct__act">
                    <button className="btn btn--primary btn--lg" type="submit">
                      Send enquiry
                      <Icon name="arrowRight" size={16} strokeWidth={2.2} className="btn__arrow" />
                    </button>
                    <span className="ct__fine">
                      We will only use these details to answer your enquiry.
                    </span>
                  </div>
                </form>
              )}
            </Reveal>

            {/* ---- What to expect ---- */}
            <aside className="ct__side">
              <Reveal>
                <h2 className="ct__sideh">What happens next</h2>
                <ul className="ct__steps">
                  {contact.expect.map((s) => (
                    <li key={s.title}>
                      <span className="ct__stepi">
                        <Icon name={s.icon} size={18} strokeWidth={1.8} />
                      </span>
                      <span>
                        <span className="ct__stept">{s.title}</span>
                        <span className="ct__stepb">{s.body}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="ct__alt">
                  Prefer email?{' '}
                  <a className="ct__mail" href={`mailto:${INBOX}`}>
                    {INBOX}
                  </a>
                </p>
                <p className="ct__alt">
                  More about Wytlabs at{' '}
                  <a className="ct__mail" href={site.parent} target="_blank" rel="noreferrer">
                    wytlabs.com
                  </a>
                </p>
              </Reveal>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
