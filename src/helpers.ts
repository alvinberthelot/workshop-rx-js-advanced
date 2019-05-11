import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export function square(v: Observable<number>): Observable<number> {
  return v.pipe(map(v => v * v));
}
