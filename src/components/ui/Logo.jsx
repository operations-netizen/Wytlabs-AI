import './Logo.css';

/**
 * The official Wytlabs wordmark.
 *
 * Both files are the real production assets taken from wytlabs.com:
 *   · wytlabs-logo-dark.png  — the header mark from the live theme
 *     (/wp-content/themes/wytlabs/new-home/images/logo.png, 300×69, #141414 ink)
 *   · wytlabs-logo-light.png — the white footer mark
 *     (/wp-content/uploads/2023/05/f_wytlogo.png, 337×53)
 *
 * The artwork is never recoloured, stretched or reconstructed: `variant` picks
 * the correct official file for the background, and height alone drives the
 * size so the aspect ratio is preserved.
 */

const ASSETS = {
  dark: { src: '/brand/wytlabs-logo-dark.png', w: 300, h: 69 },
  light: { src: '/brand/wytlabs-logo-light.png', w: 337, h: 53 },
};

export default function Logo({ variant = 'dark', height = 22, className = '', priority = false }) {
  const asset = ASSETS[variant] ?? ASSETS.dark;
  const width = Math.round((asset.w / asset.h) * height);

  return (
    <img
      className={`logo ${className}`.trim()}
      src={asset.src}
      width={width}
      height={height}
      style={{ height: `${height}px`, width: `${width}px` }}
      alt="Wytlabs"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
