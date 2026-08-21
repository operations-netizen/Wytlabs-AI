/**
 * CONTACT PAGE CONFIGURATION
 * =============================================================================
 * >>> SUBMISSION IS NOT WIRED TO A BACKEND <<<
 *
 * There is no form endpoint on this project, so rather than fake a success
 * state the form composes the enquiry into a mail client via `INBOX` below.
 * That is honest and it works today, but it is an interim: replace it with a
 * real POST endpoint (and set `INBOX` to the address that should receive
 * enquiries) before this goes to production traffic.
 *
 * INBOX is a placeholder. It has not been verified as a real Wytlabs mailbox.
 * =============================================================================
 */

/** @todo Replace with the real Wytlabs enquiries address. */
export const INBOX = 'hello@wytlabs.com';

/** Set true once a real form endpoint is wired, to drop the mailto fallback. */
export const hasEndpoint = false;

export const contact = {
  eyebrow: 'Talk to Wytlabs',
  title: 'Tell us what you publish today',
  lede:
    'A short conversation is usually enough to tell whether Wytlabs AI fits how your team works — and which plan makes sense. No pitch deck, no obligation.',

  /* What the visitor can expect. Process commitments only: nothing here
     promises a response time or an outcome we cannot stand behind. */
  expect: [
    {
      icon: 'compass',
      title: 'We look at your setup',
      body: 'What you publish, where it goes, and who signs it off — so the advice is about your workflow rather than the product tour.',
    },
    {
      icon: 'palette',
      title: 'We build your brand kit with you',
      body: 'Your site, assets and voice rules go in together, so the first content you see is on brand rather than a generic demo.',
    },
    {
      icon: 'check-circle',
      title: 'You decide after seeing real output',
      body: 'The trial generates against your own brand. If it is not right for you, we will say so.',
    },
  ],

  /* Reasons someone might be getting in touch. Drives the enquiry select. */
  reasons: [
    'See Wytlabs AI on our own brand',
    'Work out which plan fits',
    'Ask about onboarding and support',
    'Discuss a custom or enterprise setup',
    'Something else',
  ],

  teamSizes: ['Just me', '2–5', '6–20', '21–50', '50+'],
};
