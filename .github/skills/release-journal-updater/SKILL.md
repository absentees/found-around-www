---
name: release-journal-updater
description: "Use when you need to check the latest changes in absentees/camera-catch-ts (from CHANGELOG.md), update the Found Around dev journal in src/index.html, and push the result."
---

# Release Journal Updater

Use this skill when the task is to keep the Found Around dev journal in sync with the latest changes in `absentees/camera-catch-ts` using `CHANGELOG.md`, and then push the change.

## Workflow

1. Read `CHANGELOG.md` from `absentees/camera-catch-ts` and identify the most recent changelog entry.
2. Compare that newest changelog entry against the top entry in the dev journal in `src/index.html`.
3. If the newest changelog entry is already documented, make no code changes and report that the journal is current.
4. If there is a new changelog entry, add or update the top journal entry so it matches the repository's existing HTML structure and tone.
5. Keep the summary concise, factual, and user-facing. Prefer a short version/title, the release date (if present), and the most important user-facing bullets from `CHANGELOG.md`.
6. Preserve the existing journal ordering, formatting, and accessibility attributes.
7. Validate the change before finishing.
8. Commit and push the change on the current branch only if the journal changed.

## Decision Points

- If the release has no meaningful user-facing changes, summarize it as a brief maintenance update.
- If the changelog entry is long, trim it to the most relevant items instead of copying everything.
- If the date or version is unclear, infer carefully from `CHANGELOG.md` headings and surrounding context.
- If there is no new changelog entry since the journal's top entry, stop after verification.

## Completion Checks

- The newest changelog entry from `absentees/camera-catch-ts/CHANGELOG.md` is represented at the top of the dev journal.
- The HTML in `src/index.html` still matches the surrounding structure.
- The change is validated locally.
- Any required commit has been pushed.
