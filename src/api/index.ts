import axios from "axios";

const api = axios.create({
  baseURL: "https://vpic.nhtsa.dot.gov/api/",
});

export const fetchVehicleMakes = async () => {
  const res = await api.get("vehicles/getallmakes?format=json");
  return res.data.Results;
};
