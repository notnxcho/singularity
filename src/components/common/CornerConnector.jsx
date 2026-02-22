const ROTATION = { tl: 0, tr: 90, br: 180, bl: 270 }

export default function CornerConnector({
  corner = 'tl',
  color = 'var(--bg-1)',
  size = 24,
  className = '',
  style,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block shrink-0 ${className}`}
      style={{ transform: `rotate(${ROTATION[corner]}deg)`, ...style }}
    >
      <path d="M24 0C10.7452 0 0 10.7452 0 24V0H24Z" fill={color} />
    </svg>
  )
}
