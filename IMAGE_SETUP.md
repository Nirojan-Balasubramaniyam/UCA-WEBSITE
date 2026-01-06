# Image Setup Instructions

## Required Images

Please add the following 5 images to the `src/assets/` folder:

1. **home-developer.jpg** (or .png) - Used as hero background
2. **developement.jpg** (or .png) - Used in Services section
3. **development2.jpg** (or .png) - Used in About section (before "How We Work")
4. **team.jpg** (or .png) - Used in About section (before team members)
5. **code.jpg** (or .png) - Used in Technologies section

## File Extensions

The code currently expects `.jpg` extensions. If your images have different extensions (`.png`, `.jpeg`, `.webp`), you can either:

1. **Rename your images** to match the expected names with `.jpg` extension
2. **Update the imports** in the component files to match your actual file names

## Image Locations

- `src/sections/HomeSection.jsx` - imports `home-developer.jpg`
- `src/sections/ServicesSection.jsx` - imports `developement.jpg`
- `src/sections/AboutSection.jsx` - imports `development2.jpg` and `team.jpg`
- `src/sections/TechnologiesSection.jsx` - imports `code.jpg`

## After Adding Images

1. Place all 5 images in `src/assets/` folder
2. Make sure file names match exactly (case-sensitive)
3. Restart the dev server if it's running
4. The images should appear automatically

## Troubleshooting

If images don't appear:
- Check browser console for import errors
- Verify file names match exactly (including case)
- Ensure images are in `src/assets/` folder, not `public/`
- Check file extensions match the imports



