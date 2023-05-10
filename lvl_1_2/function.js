import { numbers } from "./data.js";

export const getFirstElement = () => {
  return numbers[0];
};

export const getAllWithoutLast = () => {
  return numbers.slice(0, numbers.length - 1);
};

export const getJustLast = () => {
  return numbers.slice(numbers.length - 1);
};

export const getAllWithoutFirst = () => {
  return numbers.slice(1);
};

export const removeElement = () => {
  return numbers.filter((number) => number !== 55);
};

export const removePairElements = () => {
  return [...new Set(numbers)];
};

export const sumElements = () => {
  return numbers.reduce((sum, element) => sum + element);
};

export const randomCount = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const firstLetterBig = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const AllBigLetter = (letter) => {
  return letter.toUpperCase();
};
export const lastLetterCheck = (string, letter) => {
  return string[string.length - 1] === letter;
};
