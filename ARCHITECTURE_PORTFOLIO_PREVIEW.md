# Architecture Portfolio - Visual Preview

## Homepage Layout

The homepage features a **full-screen 3D rotating building** as the hero section:

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [3D Rotating Building with glass-like materials]              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  ┌─────┐                                              │   │
│  │  │     │   ╔═════════════════════════════════════╗   │   │
│  │  │     │   ║                                       ║   │   │
│  │  │     │   ║        MODERN ARCHITECTURE          ║   │   │
│  │  │     │   ║                                       ║   │   │
│  │  │     │   ╚═════════════════════════════════════╝   │   │
│  │  └─────┘                                              │   │
│  │                                                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Architecture Studio                                    │   │
│  │                                                         │   │
│  │  Crafting spaces that inspire                           │   │
│  │                                                         │   │
│  │  [ VIEW MY WORK ]                                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

## Features

### 1. Navigation Bar (Fixed)
- Transparent background when not scrolled
- Glass effect when scrolled
- Responsive mobile menu

### 2. About Section
- Parallax background with geometric shapes
- Profile image with gradient mask
- Text content with fade-in animations

### 3. Skills Section
- Animated progress bars with circular design
- Skill levels from 1-5 scale
- Glass-effect cards

### 4. Services Section
- 5 service cards in a grid
- Icons for each service
- Hover effects with scale animation

### 5. Projects Section
- Responsive grid of project cards
- Each card shows:
  - Project image
  - Title and location
  - Brief description
- Click to view case study

### 6. Experience Timeline
- Vertical timeline with date markers
- Glass cards for each position
- Smooth animations on scroll

### 7. Resume Section
- Two-column layout:
  - Left: Skills with animated progress bars
  - Right: Education and Experience
- Download button

### 8. Testimonials Section
- Auto-scrolling carousel
- Navigation buttons
- Testimonial content with client name

### 9. Contact Section
- Contact form with:
  - Name, Email, Subject, Message fields
  - Real-time validation
  - Success message on submit

### 10. Footer
- Social links
- Copyright
- Back-to-top functionality

## Technical Highlights

### 3D Performance
- Automatic optimization for mobile
- Lazy-loaded 3D components
- WebGL fallback for unsupported browsers

### Animations
- Scroll-triggered animations
- Smooth hover effects
- Page transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile, tablet, desktop
- Touch-friendly navigation

## Color Scheme
- Primary: Deep black (#0f172a)
- Accent: Gold/amber (#ff5e18)
- Background: Slate gradient
- Text: White/Slate

## Classes Used
- `.glass` - Frosted glass effect
- `.glass-dark` - Dark glass effect
- `.backdrop-blur` - Blur effects
- Custom gradients for luxury feel

## Deployment

### Build Command
\`\`\`bash
npm run build
\`\`\`

### Start Command
\`\`\`bash
npm start
\`\`\`

### Port
- Development: http://localhost:3000
- Production: Configurable via PORT env var
