import { from } from "rxjs";

const values = ["foo", "bar", "baz"];

const source$ = from(values);

source$.subscribe(v => console.log("Value", v));
