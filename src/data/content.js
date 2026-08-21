/**
 * Page content: the product story, features, workflow, audiences and the
 * Wytlabs differentiators.
 *
 * POSITIONING — this page sells **Wytlabs AI** to a business that will use it
 * for its own marketing. It is not selling a platform to resell, and it never
 * asks the visitor to white-label anything: how Wytlabs sources the technology
 * is a backend matter that stays off the customer-facing story. The only
 * technology attribution on the page is the footer legal line.
 *
 * SOURCING — every capability described is one the platform actually provides:
 * a brand kit generated from your website (source material, image and video
 * assets, brand profile, styles and voice, content preferences), content
 * generation across 70+ formats and 40+ languages, AI imagery and a template
 * designer, content plan, calendar and auto-publishing, approvals, paid ads on
 * Meta and Google, insights, repurposing, integrations and Zapier.
 * No statistics, customer results or testimonials are invented anywhere.
 */

/* ---- The problem the product solves ----------------------------------- */
export const problem = {
  eyebrow: 'The problem',
  title: 'Content is the bottleneck. AI makes it scalable.',
  lede:
    'Marketing teams spend too much time planning, creating and managing content. Wytlabs AI brings those workflows together.',
  points: [
    {
      n: '01',
      icon: 'layers3',
      title: 'Every channel wants something different',
      body: 'The same idea has to become a post, a caption, an email and an article — each rewritten by hand.',
      cost: 'Hours per idea',
    },
    {
      n: '02',
      icon: 'palette',
      title: 'Brand consistency slips',
      body: 'More writers and more channels mean more drift from the tone and language you agreed on.',
      cost: 'Off-brand output',
    },
    {
      n: '03',
      icon: 'clock',
      title: 'The calendar runs on urgency',
      body: 'Planning gets replaced by posting whatever is ready, and performance never feeds the next month.',
      cost: 'No compounding',
    },
  ],
  bridge: 'Wytlabs AI turns that production line into one workflow',
};

/* ---- Product intro: the workspace ------------------------------------- */
export const platform = {
  eyebrow: 'One AI-powered workspace',
  title: 'Everything your marketing team needs to create, manage and scale content',
  lede:
    'A brand kit teaches Wytlabs AI how you sound and look. A content plan decides what to publish. The calendar ships it. Insights inform the next round.',
  labels: [
    { icon: 'palette', title: 'Brand Kit', body: 'Voice, palette, fonts and assets' },
    { icon: 'sparkles', title: 'AI creation', body: '70+ formats, 40+ languages' },
    { icon: 'check-circle', title: 'Approvals', body: 'Review before anything ships' },
    { icon: 'calendar', title: 'Calendar', body: 'Auto-publish to every channel' },
    { icon: 'chart', title: 'Insights', body: 'What earned saves and shares' },
  ],
};

/* ---- Large editorial feature blocks ----------------------------------- */
export const features = [
  {
    id: 'creation',
    n: '01',
    eyebrow: 'AI content creation',
    title: 'One brief becomes a month of content',
    body:
      'Describe the campaign. Wytlabs AI writes the posts, the newsletter, the article and the ad copy — in your brand voice, ready to edit rather than start from scratch.',
    points: [
      'Social, blog, email, ads, product and web copy',
      '70+ content formats from a single brief',
      'Generation in more than 40 languages',
      'Edit, regenerate or refine any section inline',
    ],
    mockup: 'create',
    layout: 'full',
  },
  {
    id: 'brand',
    n: '02',
    eyebrow: 'Brand control',
    title: 'Every asset comes out on brand',
    body:
      'Point Wytlabs AI at your website and it builds your brand kit: source material, imagery, brand profile, visual style and voice. Set the rules once and every generation follows them.',
    points: [
      'Brand kit generated from your existing site',
      'Voice controls for tone, banned words and preferred phrases',
      'Logos, palette, fonts and media in one library',
      'Separate kits for each brand or location you run',
    ],
    mockup: 'brand',
    layout: 'split',
  },
  {
    id: 'workflow',
    n: '03',
    eyebrow: 'Planning & approvals',
    title: 'Nothing publishes before a human says so',
    body:
      'Content lands in a review queue with the visual, the copy and your comments in one place. Approve it, ask for changes, and it moves into the calendar.',
    points: [
      'Review queue with inline comments',
      'Approve or request changes in a click',
      'Unlimited team members on Growth and above',
      'A clear record of what was approved and when',
    ],
    mockup: 'approvals',
    layout: 'flip',
  },
  {
    id: 'publish',
    n: '04',
    eyebrow: 'Calendar & publishing',
    title: 'One calendar for every channel you publish to',
    body:
      'Queue content across your connected accounts, publish automatically at the scheduled time, and see everything you have planned in a single month view.',
    points: [
      'LinkedIn, Instagram, Facebook, X, TikTok, YouTube',
      'Email platforms, WordPress and Google Business Profile',
      'Paid campaigns on Meta and Google',
      'Thousands more apps through Zapier',
    ],
    mockup: 'calendar',
    layout: 'labels',
    labels: [
      { icon: 'calendar', t: 'Month view', b: 'Everything you have planned' },
      { icon: 'send', t: 'Auto-publish', b: 'At the scheduled time' },
      { icon: 'target', t: 'Paid ads', b: 'Meta and Google campaigns' },
    ],
  },
];

/* ---- One brief -> a whole campaign ----------------------------------- */
export const transform = {
  title: 'Start with one idea. Build an entire campaign.',
  lede:
    'A single brief fans out into every asset the campaign needs — written and designed against your brand kit — then converges on one approved schedule.',
  stages: ['One brief', 'Every asset, generated', 'One approved schedule'],
  brief: 'Launch the insulated bottle range — lead on 36-hour cold retention',
  outputs: [
    { icon: 'instagram', kind: 'Social', title: '5 posts and a carousel' },
    { icon: 'doc', kind: 'Blog', title: 'Choosing an insulated bottle' },
    { icon: 'mail', kind: 'Email', title: 'Range launch newsletter' },
    { icon: 'image', kind: 'Creative', title: 'Six sizes, brand palette' },
  ],
  queue: [
    { icon: 'linkedin', t: 'Field-tested: 36 hours cold', when: 'Tue 09:30' },
    { icon: 'instagram', t: 'Sunrise range carousel', when: 'Tue 12:00' },
    { icon: 'mail', t: 'Range launch newsletter', when: 'Wed 07:00' },
    { icon: 'doc', t: 'Choosing an insulated bottle', when: 'Thu 08:00' },
  ],
};

/* Workspace pillars called out beside the showcase dashboard. */
export const showcasePillars = [
  { icon: 'sparkles', t: 'Create', b: 'Copy and creative from one brief' },
  { icon: 'plan', t: 'Plan', b: 'A content plan you can edit' },
  { icon: 'palette', t: 'Brand', b: 'Voice and visual rules enforced' },
  { icon: 'send', t: 'Publish', b: 'Scheduled to every channel' },
];

/* ---- Dark showcase tabs ----------------------------------------------- */
export const showcase = [
  {
    id: 'insights',
    label: 'Insights',
    title: 'The next month is informed by the last one',
    body: 'Post-level performance across every connected channel — ranked by saves and shares, not just likes.',
    mockup: 'insights',
  },
  {
    id: 'library',
    label: 'Projects',
    title: 'Everything you have produced, in one place',
    body: 'Filter by channel, campaign, brand or status. Reopen any asset, repurpose it, or push it to the calendar.',
    mockup: 'library',
  },
  {
    id: 'brand',
    label: 'Brand Kit',
    title: 'The single source of brand truth',
    body: 'Voice, palette, typography and approved assets — the inputs behind every piece Wytlabs AI generates.',
    mockup: 'brand',
  },
];

/* ---- How the customer uses it ---------------------------------------- */
export const workflow = [
  {
    n: '01',
    title: 'Set up your brand',
    body: 'Add your website, assets and preferences. Wytlabs AI drafts your voice, palette and fonts from them.',
    icon: 'palette',
  },
  {
    n: '02',
    title: 'Tell Wytlabs AI what you need',
    body: 'A campaign, a launch, a month of posts — describe it in a sentence or start from a content plan.',
    icon: 'sparkles',
  },
  {
    n: '03',
    title: 'Generate and refine',
    body: 'Copy and visuals are produced together, then edited or regenerated until they are right.',
    icon: 'bolt',
  },
  {
    n: '04',
    title: 'Organise and approve',
    body: 'Everything lands in your library and review queue, so your team signs off before anything ships.',
    icon: 'check-circle',
  },
  {
    n: '05',
    title: 'Publish and grow',
    body: 'Schedule to every connected channel, then let performance shape the next plan.',
    icon: 'send',
  },
];

/* ---- Why buy it from Wytlabs ----------------------------------------- */
export const why = {
  eyebrow: 'Why Wytlabs',
  title: 'More than AI. Marketing expertise.',
  lede:
    'Wytlabs combines AI-powered technology with real marketing and eCommerce expertise — so you get judgement alongside the software, not just another content tool.',
  pillars: [
    {
      icon: 'bolt',
      kicker: 'AI-powered',
      title: 'Accelerate the repetitive work',
      body: 'The briefing, drafting, resizing and scheduling that eats your week happens in one pass, so your team spends its time on judgement instead of production.',
    },
    {
      icon: 'palette',
      kicker: 'Brand-first',
      title: 'Aligned with your identity',
      body: 'Your brand kit — voice, vocabulary, palette and assets — is the input to every generation, so output arrives on brand instead of needing to be corrected back into it.',
    },
    {
      icon: 'compass',
      kicker: 'Wytlabs expertise',
      title: 'Marketing knowledge and human support',
      body: 'Wytlabs works across search, paid media, content and social for eCommerce and SaaS brands every day. You get that judgement in how the workspace is set up, plus onboarding, training and people who know your account.',
    },
  ],
};

/* ---- Who it is for: businesses using it for their own marketing ------- */
export const audiences = [
  {
    id: 'ecommerce',
    icon: 'cart',
    title: 'eCommerce brands',
    body: 'Create product, social and campaign content faster, at the pace your launches and promotions actually demand.',
    points: ['Product and launch copy', 'On-brand creative in every size', 'Promo calendars planned weeks out'],
    stat: 'Built on Wytlabs eCommerce experience',
  },
  {
    id: 'teams',
    icon: 'compass',
    title: 'Marketing teams',
    body: 'Scale content without constantly increasing workload — brief through approval to publish, in one place.',
    points: ['Briefs to drafts in one place', 'Approvals before anything publishes', 'A calendar everyone shares'],
    stat: 'Unlimited seats from Growth up',
  },
  {
    id: 'growing',
    icon: 'rocket',
    title: 'Growing businesses',
    body: 'Build a consistent marketing workflow without adding headcount or another layer of tooling.',
    points: ['A content plan instead of a blank page', 'One place to publish everywhere', 'Wytlabs onboarding included'],
    stat: 'Set up with you, not handed over',
  },
  {
    id: 'content',
    icon: 'pen',
    title: 'Content teams',
    body: 'Create, organise and manage more content efficiently, from the same source material and without losing voice.',
    points: ['Repurpose one asset into many', 'Voice rules across every writer', 'A searchable library of everything'],
    stat: '70+ formats, 40+ languages',
  },
];
