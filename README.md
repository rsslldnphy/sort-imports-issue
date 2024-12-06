# Issue description

Change in behaviour: `import type { ... } from "./foo";` no longer respects `importOrder`.

# Replication steps

Check out this repo. Run `pnpm prettier -w src`. See that the `import type { Bar } from "./bar";` import in `src/index.test.ts` is incorrectly placed at the top of the file.
