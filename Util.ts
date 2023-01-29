/////////////////////////
//  Utility functions  //
/////////////////////////

const holidays = {
  January: { 1: "New Year's Day", 6: "Epiphany" },
  February: { 14: "Valentines Day" },
  March: { 8: "International Women's Day", 14: `${Math.PI} Day` },
  April: {
    6: "Maundy Thursday",
    7: "Good Friday",
    8: "Holy Saturday",
    9: "Easter",
    10: "Easter Monday",
    30: "Walpurgis Night",
  },
  May: { 1: "International Workers' Day", 28: "Mother's Day" },
  June: { 23: "Midsummer Eve", 24: "Midsummer Day" },
  July: {},
  August: {},
  September: {},
  October: { 31: "Halloween" },
  November: { 4: "All Hallows Day" },
  December: {
    13: "Saint Lucy's Day",
    24: "Christmas Eve",
    25: "Christmas Day",
    26: "Boxing Day",
    31: "New Years Eve",
  },
};

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
  "February",
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
    date.getMonth() + 1,
    0
  ).getDate();

  const dates = [];
  for (let i = 1; i <= amountOfDays; i++) {
    dates.push(new Date(date.getFullYear(), date.getMonth(), i));
  }

  return dates;
}

export { holidays, getDatesInMonth, getWeekdayName, getMonthName };
