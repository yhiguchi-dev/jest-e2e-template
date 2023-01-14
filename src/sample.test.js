import get from "#src/api/get";

test("two plus two is four", async () => {
  console.log(await get());
  expect(2 + 2).toBe(4);
});
