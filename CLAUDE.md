# Tradeshift Elements — Repo Notes for Claude

## Build all packages together, never one in isolation

Every package's `render()` imports `html`/directives that must come from the **same**
lit-html instance across `packages/core` and every `packages/components/*` package.
`npm run build` (root) builds everything in one pass and keeps this consistent.

Building a single package on its own (e.g. `cd packages/components/app-icon && npm run
build`, or copying just one package's `lib/` output somewhere) can leave it bundled
against a different lit-html instance than its siblings. Directives like `ifDefined`
then silently stop being recognized (they get treated as a plain, unrecognized value
instead of "no value"), with no error — the symptom looks like the property never
received its value. If you see that symptom after a build, suspect this first.

## `check-deps` (depcheck) doesn't account for `test/` directories

The pre-commit hook runs `check-deps` (`lerna exec depcheck --ignore-patterns=lib,types`).
That ignore list doesn't include `test/`, so a devDependency used only in
`packages/components/*/test/*.test.js` (e.g. `@open-wc/testing`) gets flagged as
"missing" even though it's a legitimate root-level devDependency for tests. This is a
pre-existing gap, not a real problem — safe to bypass with `--no-verify` for this
specific failure, but see the rule below.

## Disclose `--no-verify`

If a commit uses `--no-verify`, say so explicitly in the commit message or PR
description: which hook step failed, why it's safe to skip, and whether it's tracked as
follow-up work. Don't just skip silently.

## No unit test framework existed before this repo note was added

`npm test` is `npm run happo` — Happo.io visual-regression snapshots only, no
assertion-based tests. `@web/test-runner` + `@web/test-runner-playwright` +
`@open-wc/testing` were added (see `web-test-runner.config.mjs`, `npm run test:unit`) as
the pattern for component-level regression tests going forward. Test files import from
each component's `../lib/*.esm.js` (built output), not `../src/*.js` directly — `src/`
files import raw `.css` and other assets that only become valid JS through the Rollup
build pipeline; `@web/test-runner`'s dev server doesn't transform those the way Rollup
does. Run `npm run build` before `npm run test:unit` (wired up via `pretest:unit`).

Avoid jsdom for testing these components: this repo's Babel/Rollup output for some
lit-element class hierarchies (native-class extension via `Reflect.construct`) hits real
jsdom incompatibilities that don't reproduce in an actual browser. `@web/test-runner`
with the Playwright launcher runs tests in real Chromium instead.
