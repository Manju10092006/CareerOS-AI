# CareerOS AI Design System

## Visual Direction

CareerOS AI uses a premium light SaaS language: white glass surfaces, restrained blue accents, strong editorial headings, dense but calm dashboard layouts and subtle motion. The product should feel trustworthy and intelligent, not decorative or template-like.

## Tokens

- Ink: `#151c27`
- Muted text: `rgba(21, 28, 39, 0.62)`
- Primary blue: `#2563eb`
- Deep blue: `#1d4ed8`
- Mint success: `#16b89e`
- Amber warning: `#f59e0b`
- Rose risk: `#ef4444`
- Paper: `#ffffff`
- Soft background: `#f2f5ff`
- Hairline: `rgba(21, 28, 39, 0.1)`
- Premium shadow: `0 30px 90px rgba(54, 45, 79, 0.12)`

## Components

- Navbar: fixed/pill glass container, clear active state, responsive horizontal scroll on mobile, hide/reveal on Class 10 scroll.
- Cards: white or translucent white, 24-38px radius, hairline border, soft shadow, no card-inside-card stacking.
- Buttons: primary dark or blue pill, secondary white/transparent hairline pill, icon with text where action clarity matters.
- Score cards: animated circular/progress visualization, score meaning, percentile, and supporting breakdown.
- Lists: dense but breathable, never repeating identical scores, always explain the sorting method.
- Forms: clear labels, high contrast focus rings, compact field grid on desktop and single column on mobile.

## Motion

- Micro-interactions: 100-300ms transform/opacity.
- Section reveals: 500-900ms, eased, non-blocking.
- Hero ambient motion: 800-1200ms or continuous low-amplitude floating.
- Must respect `prefers-reduced-motion`.

## Accessibility

- Maintain WCAG AA contrast for text and controls.
- All clickable elements must be keyboard reachable.
- Icon-only controls need labels or titles.
- Avoid text overlap at 320px, 480px, 768px, 1024px and 1440px breakpoints.
