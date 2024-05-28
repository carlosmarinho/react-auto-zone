import axios, { AxiosError } from "axios";

export const fetchVehicleMakes = async (year: string) => {
  const res = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForManufacturerAndYear/mer?year=${year}&format=json`
  );
  return res.data.Results;
};

export const fetchVehicleModels = async (make: string) => {
  try {
    const response = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`
    );
    return response.data.Results;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`HTTP error! status: ${axiosError.response?.status}`);
  }
};

// const api = axios.create({
//   baseURL: "https://vpic.nhtsa.dot.gov/api/",
// });

// export const fetchVehicleMakes = async (year: string) => {
//   const res = await api.get(
//     `vehicles/GetMakesForManufacturerAndYear/mer?year=${year}&format=json`
//   );
//   return res.data.Results;
// };

// export const fetchVehicleModels = async (make: string) => {
//   try {
//     const response = await api.get(
//       `/vehicles/GetModelsForMake/${make}?format=json`
//     );
//     return response.data.Results;
//   } catch (error) {
//     const axiosError = error as AxiosError;
//     throw new Error(`HTTP error! status: ${axiosError.response?.status}`);
//   }
// };
