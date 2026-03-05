interface Props {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function Star({ size = 32, color = "#E8501A", style, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill={color} style={style} className={className}>
      <path d="M16 0l2.9 10.3L29.3 7l-7.4 8L32 16l-10.1 1 4.4 9.8-9.3-5.6L16 32l-1-10.8-9.3 5.6L10.1 17 0 16l10.1-7-7.4-8 10.4 3.3z"/>
    </svg>
  );
}
