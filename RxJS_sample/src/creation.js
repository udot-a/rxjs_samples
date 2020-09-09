import {of, from, Observable, fromEvent, range, timer, interval} from "rxjs";
import {catchError, map, scan} from "rxjs/operators";

// const stream$ = of(1, 2, 3, 4);
//
// stream$.subscribe(val => console.log("Value: ", val))
//
// const arr$ = from([7, 8, 9, 11, 12]).pipe(
//   scan((acc, v) => acc + v, 0)
// );
//
// arr$.subscribe(v => console.log("FROM Value: ", v));

// const stream$ = new Observable( observer => {
//   observer.next("First value");
//   setTimeout(() => observer.next("After 1000ms"), 1000)
//   setTimeout(() => observer.error("After 2000ms"), 2000)
//   setTimeout(() => observer.next("After 3000ms"), 3000)
// });
//
// stream$.subscribe(
//   v => console.log(v),
//   err => console.warn(err)
// )

// stream$.subscribe({
//   next(v) {console.log(v)},
//   error(err) {console.warn(err)},
//   complete() {console.log("I am complete")}
// })
//***********************************************************************************
// fromEvent(document.querySelector("canvas"), "mousemove")
//   .pipe(
//     map(e => ({
//       x: e.offsetX,
//       y: e.offsetY,
//       ctx: e.target.getContext("2d")
//     }) )
//   )
//   .subscribe(pos => pos.ctx.fillRect(pos.x, pos.y, 2, 2));
//
// const clear$ = fromEvent(document.getElementById("clear"), "click");
//
// clear$.subscribe(() => {
//   const canvas = document.querySelector("canvas");
//   canvas.getContext("2d").clearRect(0,0, canvas.width, canvas.height)
// })
//*****************************************************************
// const sub = interval(1000).subscribe(v => console.log(v));
//
// timer(4000).subscribe(() => sub.unsubscribe());
//
// range(42, 10).subscribe(v => console.log(v))
//*************************************************************************
