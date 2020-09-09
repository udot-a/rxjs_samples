import {interval, fromEvent} from "rxjs";
import {filter, map, scan, take, takeWhile, tap, switchMap} from "rxjs/operators";

fromEvent(document, "click")
  .pipe(
    switchMap( event => interval(1000)
      .pipe(
        takeWhile(v => v<10),
        map(v => v*3),
        filter(v => v%2 === 0),
        tap(v => console.log("ODD:",v)),
        scan((acc, v) => acc + v, 0)

      ))
  )
  .subscribe({
      next: v => console.log("Next: ", v),
      complete: () => console.log("Complete")
  })

