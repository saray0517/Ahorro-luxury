export const COLORS = {
  primary: '#081C2D',   // Navy Blue
  secondary: '#1F7A63', // Emerald Green
  bgLight: '#F5F7FA',   // Soft White
  muted: '#9AA3A8',     // Cool Gray
  white: '#FFFFFF',
  error: '#E74C3C',
  success: '#27AE60',
} as const;

export type ColorKey = keyof typeof COLORS;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
} as const;

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 28,
  xxxl: 32,
} as const;
