import axios from "axios";

const api = axios.create({
  baseURL: "https://vpic.nhtsa.dot.gov/api/",
});

export const fetchVehicleMakes = async (year: string) => {
  const res = await api.get(
    `vehicles/GetMakesForManufacturerAndYear/mer?year=${year}&format=json`
  );
  return res.data.Results;
};
