import { test, assertEqual } from "../js/testing/testing.ts";

test(async function tests_fetch() {
  console.log("before fetch");
  const response = await fetch("http://localhost:4545/package.json");
  console.log("after fetch1");
  const json = await response.json();
  assertEqual(json.name, "deno");
  console.log("after fetch");
});
