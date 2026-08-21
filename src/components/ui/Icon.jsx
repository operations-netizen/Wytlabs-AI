/**
 * Single inline SVG icon set — no icon library dependency, no network request.
 * All paths are stroked with currentColor so icons inherit text colour.
 */

const paths = {
  plan: (
    <>
      <rect x="3.5" y="4.5" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17M8 3v3M16 3v3" />
      <path d="M7 13h4M7 16.5h7M14 13h3" />
    </>
  ),
  'check-circle': (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12.2l2.4 2.4 4.6-4.9" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  'chevron-right': <path d="M9 5l7 7-7 7" />,
  'chevron-left': <path d="M15 5l-7 7 7 7" />,
  'arrow-up-right': (
    <>
      <path d="M7 17L17 7" />
      <path d="M8.5 7H17v8.5" />
    </>
  ),
  quote: (
    <>
      <path d="M9.5 6.5C7 8 5.5 10.4 5.5 13.2c0 2.3 1.4 4.3 3.5 4.3 1.7 0 3-1.3 3-3s-1.2-2.9-2.8-2.9c-.3 0-.6 0-.8.1.3-1.5 1.3-2.9 2.6-3.8z" />
      <path d="M18.5 6.5C16 8 14.5 10.4 14.5 13.2c0 2.3 1.4 4.3 3.5 4.3 1.7 0 3-1.3 3-3s-1.2-2.9-2.8-2.9c-.3 0-.6 0-.8.1.3-1.5 1.3-2.9 2.6-3.8z" />
    </>
  ),
  bolt: <path d="M13.5 3L6 13.5h4.5L10 21l7.5-10.5H13L13.5 3z" />,
  layers3: (
    <>
      <path d="M12 3.5l8.5 4.2-8.5 4.2-8.5-4.2L12 3.5z" />
      <path d="M3.5 12l8.5 4.2 8.5-4.2" />
      <path d="M3.5 16.3l8.5 4.2 8.5-4.2" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 12a8 8 0 10-2.6 5.9" />
      <path d="M20 5.5V12h-6" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5v3c0 1-.8 1.8-1.8 1.7C11 18.2 5.8 13 5 6.3 4.9 5.3 5.6 3.5 6.5 3.5z" />
  ),
  brush: (
    <>
      <path d="M4 20s.5-3 2.5-4 3.5 1 3.5 1-1 2.5-3 3-3 0-3 0z" />
      <path d="M10 17c6-3 8.5-7.5 10-13-5.5 1.5-10 4-13 10" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" />
      <path d="M18.5 15.5l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9z" />
      <path d="M5.5 15l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4L3.6 17l1.4-.5.5-1.5z" />
    </>
  ),
  palette: (
    <>
      <path d="M12 21a9 9 0 110-18c4.97 0 9 3.58 9 8 0 2.21-1.79 4-4 4h-1.5a1.75 1.75 0 00-1.16 3.06A1.75 1.75 0 0112 21z" />
      <circle cx="7.5" cy="11" r="1.1" />
      <circle cx="11" cy="7.5" r="1.1" />
      <circle cx="15.5" cy="9" r="1.1" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8 14h2M14 14h2M8 17.5h2M14 17.5h2" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12.5l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </>
  ),
  wand: (
    <>
      <path d="M4 20l11-11" />
      <path d="M16 4l1 2.5L19.5 7.5 17 8.5 16 11l-1-2.5L12.5 7.5 15 6.5 16 4z" />
      <path d="M19.5 14l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6z" />
    </>
  ),
  send: (
    <>
      <path d="M21.5 3.5L12 21l-2.2-7.3L2.5 11.5 21.5 3.5z" />
      <path d="M21.5 3.5L9.8 13.7" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5L19.5 6.5" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="M13.5 6.5L20 12l-6.5 5.5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  dash: <path d="M8 12h8" />,
  menu: <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  filter: <path d="M3.5 6.5h17M6.5 12h11M10 17.5h4" />,
  cpu: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
      <path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </>
  ),
  rocket: (
    <>
      <path d="M13 3c4 1.5 7 5 8 9-4-1-7.5.5-9.5 3L8 11.5C10 9 11.5 6 13 3z" />
      <path d="M8 11.5L5 13l2 2 1 3 1.5-3" />
      <path d="M6.5 17.5c-1 1-1.2 3-1.2 3s2-.2 3-1.2" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.2l2.3 11h9.8l2.2-8H6.4" />
      <circle cx="9.5" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="8.5" r="3.2" />
      <path d="M3.5 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M16 6.2a3.2 3.2 0 010 6.1" />
      <path d="M17.5 14.9c1.9.6 3 2.4 3 5.1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.4-3.1 8.2-7.5 9.5-4.4-1.3-7.5-5.1-7.5-9.5V6L12 3z" />
      <path d="M8.8 12l2.2 2.2 4.2-4.4" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 16.5V12M12 16.5V8M16 16.5v-3" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v5M15 3v5" />
      <path d="M6.5 8h11v3a5.5 5.5 0 01-11 0V8z" />
      <path d="M12 16.5V21" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9z" />
    </>
  ),
  recycle: (
    <>
      <path d="M7 7.5l2.5-4 2.5 4" />
      <path d="M9.5 3.5v6.5" />
      <path d="M19 13l-2 4.3-4.4-.6" />
      <path d="M17.4 16.7l-3.2-5.6" />
      <path d="M5 13l-1 4.6 4.4.9" />
      <path d="M4.3 17l3.4-5.7" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20l1-4.2 10-10a2.5 2.5 0 013.5 3.5l-10 10L4 20z" />
      <path d="M13.5 6.5l4 4" />
    </>
  ),
  store: (
    <>
      <path d="M4 9.5V20h16V9.5" />
      <path d="M3 9.5L5.5 4h13L21 9.5" />
      <path d="M9.5 20v-5.5h5V20" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.5L12 4l8 6.5V20H4v-9.5z" />
      <path d="M9.5 20v-6h5v6" />
    </>
  ),
  folder: (
    <>
      <path d="M3.5 6.5A1.5 1.5 0 015 5h3.8l1.7 2.2H19a1.5 1.5 0 011.5 1.5v9A1.5 1.5 0 0119 19.2H5a1.5 1.5 0 01-1.5-1.5v-11z" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="2.8" />
      <path d="M12 3.2l1 2.2 2.4-.5 1 2.2 2.2 1-.5 2.4 2.2 1-2.2 1 .5 2.4-2.2 1-1 2.2-2.4-.5-1 2.2-1-2.2-2.4.5-1-2.2-2.2-1 .5-2.4-2.2-1 2.2-1-.5-2.4 2.2-1 1-2.2 2.4.5 1-2.2z" />
    </>
  ),
  image: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="M4 17l4.5-4.5 3 3L15 12l5 5" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3.5h7l5 5V20.5H6z" />
      <path d="M13 3.5v5h5" />
      <path d="M9 13h6M9 16.5h4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="12.5" height="12" rx="2" />
      <path d="M15.5 11l5.5-3v8l-5.5-3z" />
    </>
  ),
  bell: (
    <>
      <path d="M6.5 10a5.5 5.5 0 0111 0c0 4 1.5 5.5 1.5 5.5H5S6.5 14 6.5 10z" />
      <path d="M10 18.5a2 2 0 004 0" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  heart: (
    <path d="M12 19.5S4 15 4 9.8A4.3 4.3 0 0112 7a4.3 4.3 0 018 2.8c0 5.2-8 9.7-8 9.7z" />
  ),
  repeat: (
    <>
      <path d="M4 9.5A3.5 3.5 0 017.5 6H19l-3-3M20 14.5A3.5 3.5 0 0116.5 18H5l3 3" />
    </>
  ),
  bookmark: <path d="M6.5 4h11v16.5L12 16.5 6.5 20.5V4z" />,
  spark: <path d="M12 4l1.4 5.1L18.5 12l-5.1 1.4L12 20l-1.4-6.6L5.5 12l5.1-2.9L12 4z" />,
  link: (
    <>
      <path d="M10 13.5a3.5 3.5 0 005 0l3-3a3.5 3.5 0 00-5-5l-1 1" />
      <path d="M14 10.5a3.5 3.5 0 00-5 0l-3 3a3.5 3.5 0 005 5l1-1" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V8a4 4 0 018 0v2.5" />
    </>
  ),
  linkedin: (
    <>
      <path d="M6 9.5V18M6 6.2v.1" />
      <path d="M11 18v-5a2.5 2.5 0 015 0v5" />
      <path d="M11 9.5V18" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M16.6 7.5v.1" />
    </>
  ),
  facebook: (
    <>
      <path d="M14.5 8.5h2.5" />
      <path d="M14.5 20V9.5A3 3 0 0117.5 6.5h.5" />
      <path d="M10.5 12.5h6" />
    </>
  ),
  x: <path d="M5 5l14 14M19 5L5 19" />,
  tiktok: (
    <>
      <path d="M14 4v9.5a3.5 3.5 0 11-3.5-3.5" />
      <path d="M14 4c.5 2.5 2 4 4.5 4.2" />
    </>
  ),
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="3.5" />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5z" />
    </>
  ),
};

export const iconNames = Object.keys(paths);

export default function Icon({ name, size = 20, strokeWidth = 1.7, className, ...rest }) {
  const shape = paths[name];
  if (!shape) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {shape}
    </svg>
  );
}
