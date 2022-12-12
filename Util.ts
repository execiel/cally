/////////////////////////
//  Utility functions  //
/////////////////////////

// Day and month names
const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Returns name of weekday from date
function getWeekdayName(date: Date): string {
  return weekdayNames[date.getDay()];
}

// Returns name of month from date
function getMonthName(date: Date): string {
  return monthNames[date.getMonth()];
}

// Returns days in month from date
function getDatesInMonth(date: Date) {
  const amountOfDays = new Date(
    date.getFullYear(),
    date.getMonth()+1,
    0
  ).getDate();

  const dates = [];
  for (let i = 1; i <= amountOfDays; i++) {
    dates.push(new Date(date.getFullYear(), date.getMonth(), i));
  }

  return dates;
}

export { getDatesInMonth, getWeekdayName, getMonthName };
