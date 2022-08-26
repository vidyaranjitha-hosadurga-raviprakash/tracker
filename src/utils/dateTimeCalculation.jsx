import date from "date-and-time";
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

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getDate = (date) => {
  let newDate = new Date(date);
  return `${monthNames[newDate.getMonth()]} ${newDate.getDate()}`;
};

export const getDay = () => {
  let day = new Date();
  return days[day.getDay()];
};

export const getDateTime = (date) => {
  let newDate = new Date(date);
  let hours =
    newDate.getHours() > 12 ? newDate.getHours() - 12 : newDate.getHours();
  let am_pm = newDate.getHours() >= 12 ? "PM" : "AM";
  let minutes =
    newDate.getMinutes() < 10
      ? "0" + newDate.getMinutes()
      : newDate.getMinutes();
  return `${
    monthNames[newDate.getMonth()]
  } ${newDate.getDate()}, ${hours}:${minutes} ${am_pm}`;
};

export const greetingOfTheDay = (() => {
  const hr = date.format(new Date(), "HH");
  if (hr >= 0 && hr < 12) {
    return "Good morning";
  } else if (hr === 12) {
    return "Good noon";
  } else if (hr >= 12 && hr <= 17) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
})();

export const getTodaysDate = (() => {
  return `${getDay()}, ${getDate(new Date())}`;
})();
