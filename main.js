import { Greeter } from './Greeter.js';

let a = [1, 2, 3].map(n => n + 1);
console.log(a);

let greeter = new Greeter();
greeter.greet('Gyozo');