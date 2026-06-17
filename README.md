# Fixture: js-pass (green)

A small, all-green JavaScript project used by the testright verb battery. One
fixture exercises three verbs:

- **run** — `npm test` (Jest) is all green, so `run-suite-once` should report a
  passing suite.
- **convert** — `src/calculator.test.js` is a Jest suite to migrate to Vitest;
  the converted suite must still pass.
- **generate** — `src/email.js` ships untested, so `generate-test-suite` should
  write a runnable suite for `validateEmail` / `normalizeEmail`.

Paired with [testright-fixture-js-fail](https://github.com/mrd1234/testright-fixture-js-fail)
(one deterministically-failing test) for `heal` and the failing-`run` variant.
`repo_url` is a workflow input.

> Note: Jest is declared in devDependencies but not vendored — `run`/`heal`
> test_run needs `npm ci` (or a vendored `node_modules`) before the suite runs.
