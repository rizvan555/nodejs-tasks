import { data } from "./cities.js";

export const filterPopulation1 = () => {
  return data.filter((city) => city.population > 100000);
};

export const filterPopulation2 = () => {
  return data.filter((city) => city.population < 100000);
};

