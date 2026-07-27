# Image Requirements

## Current Status
All placeholder images have been created in the `/public` directory:
- `public/projects/` - 28+ placeholder images
- `public/avatars/` - Avatar placeholder
- `public/images/` - General images
- `public/placeholder.svg` - SVG placeholder

## Status: ✅ PLACEHOLDERS EXIST

All images are working as placeholders! They are 1x1 pixel images that will display.

## How to Add Real Images

### Option 1: Use Unsplash (Free)
```bash
# Download high-quality architecture photos:
npx degit https://github.com/unsplash/unsplash-src

# Or manually download from:
# https://unsplash.com/s/photos/architecture
```

### Option 2: Generate with AI
- Use DALL-E, Midjourney, or Stable Diffusion
- Keywords: "modern architecture", "building interior", "architectural render"

### Option 3: Use Real Project Photos
Replace placeholder files with your own photography:
- `public/projects/villa-*.jpg`
- `public/projects/office-*.jpg`
- etc.

### Image Guidelines:
- **Hero images**: 1920x1080 minimum
- **Project thumbnails**: 800x600 minimum
- **Avatars**: 200x200 minimum
- **Format**: JPEG (with WebP for modern browsers)

## Technical Notes

The CSS is now properly loaded via `globals.css` in the App Router.

Images are served from `/public/` and referenced as:
- `/villa-1.jpg` for projects
- `/profile.jpg` for avatar
- `/building.glb` for 3D model
