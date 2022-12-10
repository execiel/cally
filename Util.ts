/////////////////////////
//  Utility functions  //
/////////////////////////

// Interfaces
interface Day {
  name: string;
  date: number;
}

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
function getDaysInMonth(date: Date) {
  const amountOfDays = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const days = [];
  for (let i = 1; i <= amountOfDays; i++) {
    days.push(getDay(new Date(date.getFullYear(), date.getMonth() + 1, i)));
  }

  return days;
}

// Returns day type from date
function getDay(date: Date): Day {
  return { name: getWeekdayName(date), date: date.getDate() };
}

export { getDaysInMonth, getMonthName, Day, getDay };
