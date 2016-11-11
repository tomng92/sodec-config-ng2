/**
 * Created by tnguyen on 2016-11-11.
 */



import {Observable} from "rxjs";

//  var rx = require("rx");


let xxx = Observable.interval(222).take(8).map(i => [11, 44, 22, 44, 105, 10][i]);

let result = xxx.subscribe( x => console.log(x));
