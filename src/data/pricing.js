/**
 * WYTLABS AI — PRICING CONFIGURATION
 * =============================================================================
 * >>> PLACEHOLDER — WYTLABS PRICING IS NOT FINALISED <<<
 *
 * Every figure below is a placeholder. Wytlabs sets its own commercial strategy
 * and margin — do not treat these as final, and do not assume they mirror any
 * upstream vendor's rate card.
 *
 * The section carries a visible "Indicative pricing" tag while
 * `isPlaceholder` is true — set it to false once the real rate card lands.
 *
 * These are Wytlabs AI plans, sold by Wytlabs to a customer who will use the
 * platform for their own marketing. Plan copy must never suggest reselling,
 * white-labelling, or running client workspaces.
 *
 * The whole pricing UI reads from this file — replacing the numbers here is the
 * only change needed.
 * =============================================================================
 */

/** Shows the on-page "Indicative pricing" tag while the rates are not final. */
export const isPlaceholder = true;

export const billing = {
  symbol: '$',
  periods: {
    monthly: { id: 'monthly', label: 'Monthly', suffix: '/mo' },
    yearly: { id: 'yearly', label: 'Yearly', suffix: '/mo', note: 'billed annually' },
  },
  savings: 'Save 20%',
  trial: {
    available: true,
    line: '7-day free trial · no credit card · onboarding included',
    short: '7-day free trial',
  },
};

export const plans = [
  {
    id: 'starter',
    name: 'Starter',
    tier: 'For individuals & small business',
    monthly: 99,
    yearly: 79,
    bestFor: 'Solo marketers and small brands getting started.',
    limits: [
      { k: 'Publishing channels', v: '3' },
      { k: 'Generation credits', v: '600 / mo' },
      { k: 'Brand kits', v: '1' },
      { k: 'Users', v: '1' },
    ],
    features: [
      'AI content across social, blog and email',
      'Brand kit built from your website',
      'AI imagery and template designer',
      'Content plan and calendar',
      'Wytlabs onboarding walkthrough',
    ],
    cta: { label: 'Get started', href: '#contact' },
  },
  {
    id: 'growth',
    name: 'Growth',
    tier: 'For growing marketing teams',
    monthly: 199,
    yearly: 159,
    featured: true,
    badge: 'Most popular',
    bestFor: 'Teams publishing across every channel, every week.',
    limits: [
      { k: 'Publishing channels', v: '10' },
      { k: 'Generation credits', v: '1,500 / mo' },
      { k: 'Brand kits', v: '3' },
      { k: 'Users', v: 'Unlimited' },
    ],
    features: [
      'Everything in Starter',
      'Approvals and review workflow',
      'Unlimited team members',
      'Paid ads on Meta and Google',
      'Priority support and live onboarding',
    ],
    cta: { label: 'Choose Growth', href: '#contact' },
  },
  {
    id: 'professional',
    name: 'Professional',
    tier: 'For larger content needs',
    monthly: 399,
    yearly: 319,
    bestFor: 'Higher volume, more brands, deeper workflow.',
    limits: [
      { k: 'Publishing channels', v: '20' },
      { k: 'Generation credits', v: '4,000 / mo' },
      { k: 'Brand kits', v: '10' },
      { k: 'Users', v: 'Unlimited' },
    ],
    features: [
      'Everything in Growth',
      'Advanced brand voice controls',
      'Integrations and Zapier access',
      'Wytlabs implementation session',
      'Named Wytlabs contact',
    ],
    cta: { label: 'Get started', href: '#contact' },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tier: 'For custom requirements',
    monthly: null,
    yearly: null,
    priceLabel: 'Custom',
    priceNote: 'scoped to your organisation',
    bestFor: 'Organisations needing a tailored setup and support.',
    limits: [
      { k: 'Publishing channels', v: 'Custom' },
      { k: 'Generation credits', v: 'Custom' },
      { k: 'Brand kits', v: 'Custom' },
      { k: 'Users', v: 'Unlimited' },
    ],
    features: [
      'Everything in Professional',
      'Volume and seat limits to fit',
      'Wytlabs strategy and reporting',
      'Onboarding and team training',
      'Dedicated Wytlabs account team',
    ],
    cta: { label: 'Talk to Wytlabs', href: '#contact' },
  },
];
