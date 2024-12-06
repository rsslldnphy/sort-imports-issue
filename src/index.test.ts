import type { Bar } from "./bar";

import { expectTypeOf, test } from "vitest";

import { foo } from "./foo";

test("foo", () => {
    expectTypeOf(foo).toEqualTypeOf<Bar[]>();
});
