let startDate = new Date("July 11, 2022");
let endDate = new Date("November 11, 2022");

let msec_per_day = 1000 * 60 * 60 * 24;
let elapseMilliseconds = startDate.getTime() - endDate.getTime();
let dayDifference = elapseMilliseconds / msec_per_day;

let numbersOfDays = Math.abs(Math.round(dayDifference));
console.log(numbersOfDays);

