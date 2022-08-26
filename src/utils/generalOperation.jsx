import { greetingOfTheDay } from "utils/dateTimeCalculation";

export const greetUser = (username) => {
  return (() => `${greetingOfTheDay}, ${username}`)();
};

export const destructureNestedObject = (object, keyName) => {
  var items = [];
  if (object) {
    items = Object.values(object).map((item) => item[keyName]);
  }
  return items;
};

export const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const isObjectEmpty = (obj) => {
  if (isNull(obj)) {
    return true;
  }
  return Object.keys(obj).length ? false : true;
};

export const isNull = (obj) => {
  return obj === null;
};
