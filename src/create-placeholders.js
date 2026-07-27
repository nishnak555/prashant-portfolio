const fs = require('fs');
const path = require('path');

// Create a simple placeholder image (1x1 pixel)
const placeholder = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==',
  'base64'
);

// Create directories
const dirs = [
  'public/projects',
  'public/avatars',
  'public/images'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Create placeholder images for projects
const projectImages = [
  'villa-1.jpg', 'villa-2.jpg', 'villa-3.jpg', 'villa-floorplan-1.jpg', 'villa-floorplan-2.jpg', 'villa-render-1.jpg', 'villa-render-2.jpg',
  'office-1.jpg', 'office-2.jpg', 'office-3.jpg', 'office-floorplan.jpg', 'office-render-1.jpg', 'office-render-2.jpg',
  'culture-1.jpg', 'culture-2.jpg', 'culture-3.jpg', 'culture-floorplan.jpg', 'culture-render-1.jpg',
  'apartment-1.jpg', 'apartment-2.jpg', 'apartment-floorplan.jpg', 'apartment-render.jpg',
  'hall-1.jpg', 'hall-2.jpg', 'hall-3.jpg', 'hall-floorplan.jpg', 'hall-render.jpg',
  'beach-1.jpg', 'beach-2.jpg', 'beach-3.jpg', 'beach-floorplan.jpg', 'beach-render.jpg'
];

projectImages.forEach(img => {
  fs.writeFileSync(path.join('public/projects', img), placeholder);
});

// Create placeholder for high-quality project images
const highQualityPlaceholder = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAoAAAAAAAACAIAAAD8JuUZAAAAGXRFWHRTb2Z0d2FyZQBBZG95ZSBJbWFnZVJlYWR5ccllPAAAABhJREFUeNpi/P//PwP斜aszFgYEAJ2NQBJYAybsYDFbBQCAAD6/wL1YTEsU4IAAAAAElFTkSuQmCC',
  'base64'
);

const highQualityImages = [
  'profile.jpg', 
  'building.glb'
];

highQualityImages.forEach(img => {
  fs.writeFileSync(path.join('public', img), placeholder);
});

console.log('Placeholder images created successfully!');
