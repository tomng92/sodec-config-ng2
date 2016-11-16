/**
 * Created by tnguyen on 2016-11-11.
 */



import {Observable} from "rxjs";
import {log} from "util";


function  createObserv(): Observable<any> {
  return Observable.interval(222).take(8).map(i => [11, 44, 22, 44, 105, 10][i]);
}


let listeDeNombres : number[] = [11, 44, 22, 44, 105, 10];




// let aaa: Observable<number> = Observable.from(listeDeNombres).forEach( x => console.log(" listeDeNombres -> %d", x));



let xxx = createObserv();

let result = xxx.subscribe( x => console.log(x));




var source = Observable
  .interval(500 /* ms */)
  .timeInterval()
  .take(3);

var subscription = source.subscribe(
  function (x) {
    console.log("Next: %d %d -- %s", x.value , x.interval, typeof x);
  },
  function (err) {
    console.log('Error: ' + err);
  },
  function () {
    console.log('Completed');
  });


