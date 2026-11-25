interface BrandMarkProps {
  size?: number;
  variant?: 'on-dark' | 'on-light';
  showText?: boolean;
}

export function BrandMark({ size = 24, variant = 'on-dark', showText = true }: BrandMarkProps) {
  const lowerColor = variant === 'on-dark' ? '#669DFD' : '#2463eb';
  const upperColor = variant === 'on-dark' ? '#ffffff' : '#0a1630';
  const textColor = variant === 'on-dark' ? '#ffffff' : '#0a1630';

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="14" cy="14" r="14" fill={upperColor} />
        <path d="M0 14a14 14 0 0 0 28 0H0Z" fill={lowerColor} />
      </svg>
      {showText && (
        <span
          style={{
            color: textColor,
            fontSize: size <= 20 ? '1rem' : '1.125rem',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          Tidemark
        </span>
      )}
    </span>
  );
}
