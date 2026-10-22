# Hriday HQ — PWA files

This adds installable-app metadata, a branded SVG icon, and a conservative offline app-shell cache.

## Deployment
The app files are in the repository root. Keep `config.js` unchanged. No Supabase secrets should be added to the repository.

After GitHub Pages finishes deploying, open https://heyybb.github.io/Hriday/ in Chrome on Android and choose **⋮ → Install app** (or **Add to Home screen**).

The PWA shell can reopen offline if previously cached, but Supabase sign-in and live business data still require internet. Push notifications are not included in this step.
