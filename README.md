# PCA General Assembly Overture Analysis

Static GitHub Pages podcast feed for `PCA General Assembly Overture Analysis`.

## Where to Place Finished Audio

Place finished MP3 files here:

`/Users/chrisrimondi/Documents/Codex/2026-05-16/pca-general-assembly-overture-analysis/episodes`

Use a matching note slug in `notes/`.

Recommended naming pattern:

`pca-overture-analysis-YYYY-MM-DD.mp3`

Example:

`episodes/pca-overture-analysis-2026-06-01.mp3`
`notes/pca-overture-analysis-2026-06-01.md`

The note title becomes the episode title in the podcast feed. If an MP3 already exists for the note slug, `npm run publish:episode` will use that audio file and will not generate replacement TTS audio.

## Publish an Episode

After adding the finished audio file and matching note:

```sh
set -a; source /Users/chrisrimondi/Code/MapOSCAL/.env; set +a; npm run publish:episode -- notes/pca-overture-analysis-YYYY-MM-DD.md
```

This updates `feed.xml`, commits the note/audio/feed changes, and pushes them to GitHub Pages.

## Generate Audio From a Note

If no matching MP3 exists in `episodes/`, the publish command generates audio from the note with OpenAI TTS before updating the feed.

## Feed

Public feed URL after GitHub Pages is enabled:

`https://chrisrimondi.github.io/pca-general-assembly-overture-analysis/feed.xml`

## Public Content Rule

GitHub Pages output is public. Keep notes and audio free of private correspondence, credentials, private pastoral details, unpublished material that should not be indexed, or anything unsuitable for a public feed.
