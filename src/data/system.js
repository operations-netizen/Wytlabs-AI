/**
 * ALL-IN-ONE SYSTEM — managed offer
 * =============================================================================
 * >>> TWO THINGS TO CONFIRM BEFORE THIS SHIPS <<<
 *
 * 1. PRICE. `price` below is a firm figure, supplied directly rather than
 *    derived. Every other price on this page is placeholder and carries a
 *    visible "Indicative pricing" tag (see src/data/pricing.js, isPlaceholder).
 *    Showing one hard rate beside four indicative ones is inconsistent — either
 *    finalise the plan table or mark this one indicative too, via
 *    `priceIsFinal` below.
 *
 * 2. SCOPE. These are managed-service capabilities — local search, ads, call
 *    handling, lead qualification. They are a different offer from the content
 *    platform the rest of the page describes (brand kit, generation, calendar,
 *    approvals, publishing). Confirm Wytlabs actually delivers each one.
 *
 * SOURCING — every title and body here was supplied, not written from the
 * platform's capabilities. The three items marked `unverified` had their copy
 * cut off in the source, so the bodies are reconstructions: replace them with
 * the real wording.
 * =============================================================================
 */

/** Set true once this rate is contractually final; drives the indicative tag. */
export const priceIsFinal = false;

export const system = {
  name: 'All-In-One',
  tagline: 'Flat rate, completely unlimited execution.',
  price: '$2,499',
  period: '/ month',
  label: 'Full system',
  summary: 'Complete marketing funnel managed by AI.',
  cta: { label: 'Talk to Wytlabs', href: '/contact' },

  items: [
    {
      icon: 'grid',
      title: 'Complete marketing funnel',
      body: 'Website, content, and conversion built into one connected system.',
    },
    {
      icon: 'store',
      title: 'Google Business Profile',
      body: 'Built to rank in the map and turn local searches into calls.',
    },
    {
      icon: 'search',
      title: 'High-intent Google & GMB search ads',
      body: 'Managed around the searches that produce qualified jobs.',
    },
    {
      icon: 'globe',
      title: 'Google & AI visibility',
      /** @todo Source copy was cut off — replace with the real wording. */
      body: 'Present in Google and in the AI assistants people now search with.',
      unverified: true,
    },
    {
      icon: 'phone',
      title: 'AI Receptionist',
      /** @todo Source copy was cut off — replace with the real wording. */
      body: 'Every call, form and DM answered, around the clock.',
      unverified: true,
    },
    {
      icon: 'filter',
      title: 'Inbound lead qualification',
      /** @todo Source copy was cut off — replace with the real wording. */
      body: 'Every lead scored and routed, so your team works the real ones.',
      unverified: true,
    },
  ],
};
