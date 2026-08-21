/** Brand strings, navigation, credentials and SEO metadata. */

export const site = {
  brand: 'Wytlabs',
  product: 'Wytlabs AI',
  url: 'https://wytlabs.com/ai',
  parent: 'https://wytlabs.com',
  meta: {
    title: 'Wytlabs AI — AI-Powered Marketing Platform',
    description:
      'Wytlabs AI helps your team create on-brand marketing content, streamline your content workflow and scale your marketing with AI — all from one workspace, with Wytlabs onboarding and support behind it.',
    ogTitle: 'Wytlabs AI — Create smarter. Market faster. Scale further.',
    ogDescription:
      'An AI-powered marketing platform from Wytlabs. Brand kit, AI content creation, approvals, calendar and insights in one workspace for your own marketing.',
    ogImage: 'https://wytlabs.com/brand/og-wytlabs-ai.svg',
  },
};

export const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const ctas = {
  primary: { label: 'Get Started', href: '#pricing' },
  secondary: { label: 'Explore Features', href: '#features' },
  talk: { label: 'Talk to Wytlabs', href: '/contact' },
};

/**
 * Verified partner credentials published on wytlabs.com.
 *
 * These are the real badge artworks served by wytlabs.com
 * (wp-content/uploads/2025/08/t_logo1-5.png), downloaded unmodified into
 * public/brand/partners/. Nothing here is redrawn, recoloured or approximated,
 * and no badge Wytlabs does not hold has been added.
 *
 * The source artwork ships with a white background baked in. `logoN.png` is
 * the same artwork with that background made transparent — alpha derived from
 * each pixel's distance from white and the ink un-premultiplied back out, so
 * recompositing over white is byte-exact. No mark is recoloured, redrawn or
 * rescaled, and the 287x82 canvas is kept because the vendor artwork balances
 * each lockup's optical weight inside it. The untouched originals stay
 * alongside as t_logoN.png.
 *
 * Order matches the strip on wytlabs.com.
 */
export const partners = [
  { src: '/brand/partners/logo4.png', alt: 'Klaviyo', w: 287, h: 82 },
  { src: '/brand/partners/logo5.png', alt: 'Shopify Partners', w: 287, h: 82 },
  { src: '/brand/partners/logo1.png', alt: 'Google Cloud Partner', w: 286, h: 82 },
  { src: '/brand/partners/logo2.png', alt: 'Meta Business Partners', w: 287, h: 82 },
  { src: '/brand/partners/logo3.png', alt: 'Amazon Ads Verified Partner', w: 287, h: 82 },
];

export const footer = {
  blurb:
    'Wytlabs AI is the AI-powered marketing platform from Wytlabs — a full-stack digital marketing team working with eCommerce and SaaS brands across search, paid media, content and social.',
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Platform', href: '#platform' },
        { label: 'Features', href: '#features' },
        { label: 'How it works', href: '#how' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'eCommerce brands', href: '#audience' },
        { label: 'Marketing teams', href: '#audience' },
        { label: 'Growing businesses', href: '#audience' },
        { label: 'Content teams', href: '#audience' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: 'https://wytlabs.com/blog/' },
        { label: 'Case studies', href: 'https://wytlabs.com/casestudies/' },
        { label: 'Podcast', href: 'https://wytlabs.com/podcast/' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Who we are', href: 'https://wytlabs.com/who-we-are/' },
        { label: 'Careers', href: 'https://wytlabs.com/careers/' },
        { label: 'Contact', href: 'https://wytlabs.com/contact/' },
        { label: 'Why Wytlabs', href: '#why' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy policy', href: 'https://wytlabs.com/privacy-policy/' },
        { label: 'Terms of service', href: 'https://wytlabs.com/terms-of-service/' },
      ],
    },
  ],
  /* Verified Wytlabs profiles, taken from the links on wytlabs.com. */
  social: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/wytlab' },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/wytlabs/' },
    { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/wytlabs1/' },
    {
      label: 'YouTube',
      icon: 'youtube',
      href: 'https://www.youtube.com/channel/UCZQa04FrcVo3s03Fwe1dRDg',
    },
  ],
};
