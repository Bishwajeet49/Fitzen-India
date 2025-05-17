# Migration from Create React App to Vite

This project has been migrated from Create React App (CRA) to Vite. The migration was necessary as CRA is deprecated and no longer maintained, while Vite offers better performance and a more modern development experience.

## Changes Made During Migration

1. Added Vite and its React plugin:
   ```
   npm install --save-dev vite @vitejs/plugin-react
   ```

2. Created a Vite configuration file (`vite.config.js`)

3. Updated package.json scripts:
   - Replaced `start` with `dev`
   - Updated `build` to use Vite
   - Added `preview` script

4. Converted to ES modules:
   - Added `"type": "module"` to package.json
   - Updated PostCSS and Tailwind config files to use ES module export syntax

5. Created new entry points:
   - Moved index.html to the root directory (Vite requirement)
   - Updated paths to use relative paths instead of %PUBLIC_URL%

6. Renamed component files from `.js` to `.jsx` for better compatibility with Vite

## Environment Variables

Create React App used variables prefixed with `REACT_APP_`. With Vite, environment variables are prefixed with `VITE_`. If you're adding environment variables, use the `VITE_` prefix.

## Development

To start the development server:

```
npm run dev
```

## Building for Production

To build for production:

```
npm run build
```

To preview the production build locally:

```
npm run preview
```

## Additional Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [React with Vite](https://vitejs.dev/guide/using-plugins.html#using-plugins) 