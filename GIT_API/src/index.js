import {EMPTY, fromEvent} from "rxjs";
import {map, debounceTime, distinctUntilChanged, switchMap, mergeMap, tap, catchError, filter} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

const url = `https://api.github.com/search/users?q=`;

const search = document.getElementById("search");
const result = document.getElementById("result");

const stream$ = fromEvent(search, "input")
  .pipe(
    map(({target: {value}}) => value),
    debounceTime(1000),
    distinctUntilChanged(),
    tap(() => result.innerHTML = ""),
    filter(val => val.trim()),
    switchMap(value => ajax.get(url+value).pipe(
      catchError(err => EMPTY)
    )),
    map(({response}) => response.items),
    mergeMap(v => v)

  );

stream$.subscribe(val => {
  console.log(val);
  const html = `
          <div class="card">
          <div class="image">
            <img src="${val.avatar_url}" alt="avatar">
            <span class="title">${val.login}</span>
          </div>

          <div class="card-action">
            <a href="${val.html_url}" target="_blank">Open GitHub</a>
          </div>
        </div>

  `
  result.insertAdjacentHTML("beforeend", html)
  // json.innerHTML = JSON.stringify(val.response.items[0], null, 2)
})
