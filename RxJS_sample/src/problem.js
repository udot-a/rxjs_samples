import {interval} from "rxjs";
import {filter, map, scan, take, tap} from "rxjs/operators";

const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector('#problem .result')

const people = [
  {name: 'Vladilen', age: 25},
  {name: 'Elena', age: 17},
  {name: 'Ivan', age: 18},
  {name: 'Igor', age: 14},
  {name: 'Lisa', age: 32},
  {name: 'Irina', age: 23},
  {name: 'Oleg', age: 20}
]

btn.addEventListener("click", () => {
  btn.disabled = true;
  console.log("LKKHKHKLHL")
  let i = 0;

  const canDrink = [];

  const interval = setInterval(() => {
      if (people[i]) {
        if (people[i].age >= 18) {
          canDrink.push(people[i].name);
        }
        console.log(canDrink)
        display.textContent = canDrink.join(" ");
        i++;
      } else {
        clearInterval(interval);
        btn.disabled = true;
      }
  }, 1000)
});

rxjsBtn.addEventListener("click", () => {
  rxjsBtn.disabled = true;

  interval(1000)
    .pipe(
      take(people.length),
      tap(v => console.log(v)),
      filter(v => people[v].age >= 18),
      map(v => {
        return people[v].name;
      }),
      scan((acc, v) => [...acc, v], [])
    )
    .subscribe(
      res => display.textContent = res.join(" "),
      null,
      () => rxjsBtn.disabled = false
)
})
