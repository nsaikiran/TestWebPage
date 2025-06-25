# Catalog Offers Webpage

This project provides a simple static webpage (`index.html`) that displays product offers from a catalog object. It is designed to be easily hosted (e.g., on GitHub Pages) and to work with dynamic or static data sources.

## Features
- **Dynamic Data Source:** On page load, the script checks for a global `window.catalog` object. If present and valid, it uses this data to render the offers.
- **Fallback Data:** If `window.catalog` is not found or invalid, the page uses a hardcoded fallback catalog (from `sample catalog.js`).
- **User Messaging:** The UI displays a message if `window.catalog` is missing, empty, or if there are no offers to show.
- **Offer Display:** Each product offer is shown as a card with its name and a list of available commitment variants (showing term and price).

## Usage
1. **Open `index.html` in your browser.**
   - If you want to use your own catalog data, define a `window.catalog` object before the script runs (e.g., in the browser console or by including a script tag before `index.html`'s script).
   - If `window.catalog` is not defined, the page will use the fallback data and show a message.

2. **Structure of `window.catalog`:**
   ```js
   window.catalog = {
     currency: { code: 'USD', symbol: 'US $', ... },
     offers: [
       {
         productId: '...',
         productName: '...',
         commitmentVariants: [
           {
             term: '...',
             offerPriceDisplay: { displayUnitPrice: ... },
             // ...
           },
           // ...
         ]
       },
       // ...
     ],
     metadata: { ... }
   };
   ```

## Deploying to GitHub Pages
1. **Initialize a Git repository (if not already):**
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. **Push to GitHub:**
   - Create a new repository on GitHub.
   - Add the remote and push:
     ```sh
     git remote add origin https://github.com/yourusername/your-repo.git
     git push -u origin main
     ```
3. **Enable GitHub Pages:**
   - Go to your repository's Settings > Pages.
   - Set the source to the `main` branch (and `/root` if needed).
   - Your site will be available at `https://yourusername.github.io/your-repo/`.

## Customization
- To use your own catalog data, either modify the fallback data in `index.html` or inject a `window.catalog` object before the script runs.
- You can adjust the styles in the `<style>` section of `index.html` as needed.

---

**Author:** [Your Name] 