import { cold } from "jasmine-marbles";

import { square } from "./helpers";

describe("Flux de transformations d'observables", () => {
  it("square", () => {
    const source$ = cold("-a--b-----c|", { a: 4, b: 2, c: 8 });
    const expected$ = cold("-x--y-----z|", { x: 16, y: 4, z: 64 });
    const result$ = square(source$);
    expect(result$).toBeObservable(expected$);
  });
});
