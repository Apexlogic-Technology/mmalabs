# MMALABS website project

Complete editable static HTML, CSS and JavaScript website export.
No package installation or build framework is required.

## Run locally

Extract this ZIP, open a terminal in this project folder, then run:

```sh
python3 -m http.server 8080 --directory dist
```

On Windows, use `py` instead of `python3`. Open http://localhost:8080 in your browser.
Use a local server rather than opening HTML files directly: asset and navigation paths start at the website root.

## Project structure

- `dist/index.html`: homepage HTML entry point.
- `dist/app.js`: navigation, shared components, local interactions and animations.
- `dist/source-content.js`: locally rendered, route-specific content for patient information, services and programs, organisational services, company pages, training course listings and course details, and the news archive. Full story pages are rendered from `dist/news-data.json`; the downloaded test menu and available test details are loaded from `dist/test-menu.json`.
- `dist/news-data.json`: complete article text, dates, summaries and local featured-image paths for the imported MMALABS news archive. Each story has a generated direct-entry route under `dist/news/`.
- Legacy reference URLs for imaging, branches and the vitamins story resolve to equivalent content within this project; deployment does not depend on the sibling reference-copy folder.
- The gallery uses 34 unique images from the downloaded reference gallery, locally bundled in `dist/assets/`; exact image duplicates already used elsewhere in the project are reused rather than copied again. Gallery images can be filtered by their reference categories.
- `dist/style.css` and `dist/people-programs.css`: responsive styling, typography, transitions, staff portraits, reference-matched page artwork, source photography, partner marks and the About-page video.
- `dist/assets/`: locally bundled artwork from the downloaded reference for Spirometry, allergy testing, DNA testing, Nkwafit, the Specialist Clinic, corporate health, immigration check-ups, partnerships and careers, along with supplied photographs, optimized staff portraits, partner and accreditation marks, videos and poster frames. Pages load these assets from this project; they do not depend on the sibling reference-copy folder.
- Course pages and category links are generated locally. Course thumbnails and the five linked ISO course-slide PDFs are bundled in `dist/assets/`; the available introductory lesson is a local page with its embedded course video.
- The test menu is copied into `dist/test-menu.json` from the downloaded site's 1,712 unique catalogue entries. Available per-test sample requirements, reference numbers and turnaround information are imported from the downloaded pages; the reference snapshot does not list prices. Search, department filters, pagination, and local test-detail views work without requesting data from the sibling reference-copy folder.
- `dist/*/index.html`: direct-entry pages for the site's routes.
- `dist/404.html`: fallback page.
- `validate.cjs`: validates templates and regenerates route entry pages.
- `check-links.cjs`: checks internal page links and local image references.
- `images/`: optional source-image backups, not used by the deployed site. The 19 JPGs are byte-identical to files in `dist/assets/`; `background vid.mp4` is not referenced by the site. Deploy only `dist`.

## Edit and validate

Edit page content and interactions in `dist/app.js`, `dist/source-content.js` and `dist/news-data.json`, and visual design in `dist/style.css` and `dist/people-programs.css`.
After changing templates or the main HTML file, run these commands from this folder with Node.js installed:

```sh
node --check dist/app.js
node --check dist/source-content.js
node --check validate.cjs
node --check check-links.cjs
node validate.cjs
node check-links.cjs
```

## Deploy

Upload the contents of `dist` to a static web host at the domain root. Preserve the nested folders and enable directory index files. No backend, database or secret environment variables are included or required for the current site.

Google Fonts (Outfit and Inter) are loaded over the internet; system fallback fonts apply when offline. The logo, photographs, and hero video in `dist/assets/` were supplied for this redesign and are bundled locally. The 24-second hero video is compressed from 14.5 MB to about 1.4 MB and has no audio.

### Launch checks

Before publishing, have MMALABS verify branch addresses, telephone numbers, opening hours, service availability, package prices and terms, course information, news and staff details. Confirm the current status and permitted use of each partner and accreditation mark. Obtain approval for the privacy notice, website terms, and any required accessibility or regulatory statements. Confirm the production domain, HTTPS, favicon, search-engine metadata and hosting error-page behaviour.

The current site is a static information website. Appointment links direct visitors to MMALABS by telephone; this site does not submit or confirm bookings. The report page links to the portal address supplied by MMALABS (`http://report.mmalabs.com.gh:81/`); because this is HTTP, confirm that the portal is protected by HTTPS before directing patients to submit report credentials or access health information. The copied test menu includes the 1,712 unique entries found in the downloaded snapshot; verify its service and turnaround details against the current menu before launch. Test and branch searches run in the browser. Google Fonts are loaded from Google, as described in the Privacy Notice.

Appointment requests remain contact-based. The report page links to the MMALABS portal address supplied for this project; the portal currently uses HTTP, so confirm HTTPS availability before directing patients to submit credentials or access health information. The generated 404 page works without JavaScript, and pages include route-specific descriptions and a helpful no-JavaScript message. These technical safeguards do not replace fact-checking, legal review, or approval of health, privacy, accreditation and partner claims.

The downloaded news reference has incorrect full-page text under three older article headlines. Matching excerpts are shown where available; the diagnostic-reasoning story retains its title and date without unrelated or explanatory filler text.

No production domain was supplied, so a canonical URL, sitemap and production `robots.txt` have not been generated. Add and verify those after the production hostname and indexing policy are approved.

The About and DNA Testing Center pages include locally bundled videos and posters. Service and organisation pages use page-specific artwork copied from the reference site; placeholder illustrative laboratory images are not used. The Nkwafit flyer is archival reference artwork, so confirm its prices and offers before publication. Partner marks are displayed without visible captions. Accreditation details and relationships must be verified for current scope before publication.

Platform account configuration and Git history are excluded from this portable export. All website source and local website assets are included.
