# Car Catalogue

A static vehicle collection by Yazan Fattal. Redesigned in white and navy with 144 model families across 36 brands and three regions.

## Preview

Open `index.html` directly, or serve this directory with any static server (for example, `python -m http.server 8080`). No build tools or API keys are required. Google Fonts is optional; local system fonts are used when offline.

## Features

- Search brands, models, body styles and regions, including accent-insensitive names.
- Combine region, brand and body filters; sort the results and load more cars.
- Save favourites locally in the browser. No account or remote storage.
- Keyboard-accessible details dialogs, original Mustang and Blazer photo galleries, and four original engine recordings. Audio starts only when requested and stops when the dialog closes.
- Local vehicle photos and per-image attribution links in the details dialog. Full credits are in `photo-credits.json`.
- An Evolution tab (`evolution.html`) with six decade overviews from the 1970s through the 2020s, plus a clearly labelled 2030 outlook. It includes 18 historical production models, three documented concepts, manufacturer source links, photo credits, keyboard-accessible decade tabs, deep links, and side-by-side decade comparisons.

## Evolution content

Edit `evolution-data.js` to update the selected eras and examples. The year attached to a car marks a model or generation launch, market introduction, or concept reveal; a photograph may show a later example within that generation. The 2020s are still in progress, and the 2030 section is an outlook using earlier concepts, not a list of confirmed future production cars. The historical summaries describe selected themes rather than claiming to cover every region or every car.

Evolution photos are stored in `images/evolution/`. Their author, file-page and licence information is available in each car's details and in `evolution-photo-credits.json`.

## Collection scope

This is a curated collection, not an exhaustive inventory of every car. It includes modern and discontinued model families. Photos can represent different generations, markets and trims. Follow each model's reference link for historical details. The 14 original entries retain their original example specifications, explicitly labelled as historical reference values with unspecified years and markets. New model families do not receive invented power or price figures.

## Updating cars

Edit `data.js`. Each entry has a unique `id`, `brand`, `name`, `region`, `body`, local `image`, model `source`, and image `credit` object. Optional `sound` points to a local recording. Counts, filters and brand lists update automatically.

The original 14 primary images, additional Mustang/Blazer photos, brand logos and four recordings are preserved. Their original licensing provenance was not supplied. Added photos use freely licensed Wikimedia Commons images. Their creators, file pages and licence URLs are recorded in `photo-credits.json` and shown beside each image in the details dialog; consult those licences when reusing the photographs.

## Deployment

GitHub Pages continues to serve the static files. The existing workflow deploys the repository root when `main` changes. To update manually, replace the site files with the contents of this directory, retaining `images/` and `sounds/`.
