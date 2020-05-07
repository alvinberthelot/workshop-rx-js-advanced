import { from } from "rxjs"

import { square$ } from "./helpers"

const source$ = from([1, 2, 3])

square$(source$).subscribe((v) => console.log("Value", v))
