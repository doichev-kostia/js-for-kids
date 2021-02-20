const secondsInAMinute = 60;
const minutesInAnHour = 60;
const secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);
const hoursInADay = 24;
const secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay);
const daysInAYear = 365;
const secondsInAYear = daysInAYear * secondsInADay;
console.log(secondsInAYear);
const age = 16;
console.log(age * secondsInAYear);//how old I am in sec
console.log(age * secondsInAYear * 1000);//age in ms

let balloons = 10;
balloons += 5;
balloons -= 10;
balloons *= 20;
balloons /= 4;


const str = "helLo THERE, hoW ARE yOu doINg?"

console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());//Hello there, how are you doing?

const childAge = 13;
const accompanied = true;

console.log(childAge <= 13 && accompanied === true);