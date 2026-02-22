/**
 * CornerConnector
 *
 * Base shape: the squared 90° corner sits at the TOP-LEFT.
 * The arc curves from top-right → bottom-left, filling the top-left quadrant.
 *
 * Rotate to get every variation:
 *
 *   corner="tl"  →   0° — squared angle top-left   (default)
 *   corner="tr"  →  90° — squared angle top-right
 *   corner="br"  → 180° — squared angle bottom-right
 *   corner="bl"  → 270° — squared angle bottom-left
 *
 * Usage examples:
 *   <CornerConnector corner="tl" style={{ position: 'absolute', top: 0, left: -24 }} />
 *   <CornerConnector corner="tr" color="var(--bg-2)" size={16} />
 */

const ROTATION = { tl: 0, tr: 90, br: 180, bl: 270 }

export default function CornerConnector({
  corner = 'tl',
  color = 'var(--bg-1)',
  size = 24,
  style,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
        flexShrink: 0,
        transform: `rotate(${ROTATION[corner]}deg)`,
        ...style,
      }}
    >
      <path d="M24 0C10.7452 0 0 10.7452 0 24V0H24Z" fill={color} />
    </svg>
  )
}
