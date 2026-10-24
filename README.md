# DFL Eggs website

A mobile-first Astro marketing and enquiry site for DFL Eggs, configured for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a GitHub repository and upload this project.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. Push to the `main` branch. The included workflow builds and deploys automatically.

The workflow sets `BASE_PATH` from the repository name so it works at `https://<account>.github.io/<repository>/`. For a custom domain, update the build environment to use `BASE_PATH: /` and add the approved domain configuration.

## Before publishing

- Replace the placeholder phone number, WhatsApp link, email, address and enquiry recipient.
- Connect the demo enquiry form to an approved form endpoint or CRM.
- Confirm the registered name and final wordmark rules with Seriscope.
- Replace draft resource cards with approved content and downloadable documents.
- Add only approved product varieties, quantities, regions, payment/order details and certificates.
- Define and substantiate any `98.6% accuracy` claim before publishing it. The site deliberately treats it as pending evidence.
- Review and replace the Privacy and Terms placeholders with approved legal copy.

## Key files

- `src/pages/` — all public pages
- `src/components/` — shared navigation, footer, wordmark and icons
- `src/styles/` — responsive visual system
- `.github/workflows/deploy.yml` — GitHub Pages deployment
