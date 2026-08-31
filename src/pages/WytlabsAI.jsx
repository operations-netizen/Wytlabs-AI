import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Problem from '../components/Problem';
import Platform from '../components/Platform';
import Features from '../components/Features';
import Workflow from '../components/Workflow';
import Transform from '../components/Transform';
import Showcase from '../components/Showcase';
import Pricing from '../components/Pricing';
import System from '../components/System';
import Why from '../components/Why';
import Audience from '../components/Audience';
import Faq from '../components/Faq';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';
import { site } from '../data/site';
import { faqs } from '../data/faqs';

/** Route-owned document metadata — no helmet dependency. */
function useMeta() {
  useEffect(() => {
    document.title = site.meta.title;

    const set = (attr, key, content) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    set('name', 'description', site.meta.description);
    set('property', 'og:title', site.meta.ogTitle);
    set('property', 'og:description', site.meta.ogDescription);
    set('property', 'og:url', site.url);
    set('property', 'og:image', site.meta.ogImage);

    let canon = document.head.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement('link');
      canon.rel = 'canonical';
      document.head.appendChild(canon);
    }
    canon.href = site.url;

    const id = 'faq-schema';
    let s = document.getElementById(id);
    if (!s) {
      s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = id;
      document.head.appendChild(s);
    }
    s.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }, []);
}

/**
 * Section order is the product story, and the light/dark rhythm is deliberate:
 *   hero (dark) → problem (light) → platform (white) → features (white)
 *   → workflow (soft blue) → transform (soft blue) → showcase (dark)
 *   → pricing (white) → why (dark) → audience (light)
 *   → faq (white) → cta (dark) → footer (dark)
 */
export default function WytlabsAI() {
  useMeta();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <Problem />
        <Platform />
        <Features />
        <Workflow />
        <Transform />
        <Showcase />
        <Pricing />
        <System />
        <Why />
        <Audience />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
