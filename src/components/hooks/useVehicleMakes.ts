import { useQuery } from "@tanstack/react-query";
import { fetchVehicleMakes } from "../../api";
import { IVehicleMakeType } from "../Vehicle/types";

export const useVehicleMakes = (year: string) => {
  const { data, status } = useQuery<IVehicleMakeType[]>({
    queryKey: ["vehicleMakes", year],
    queryFn: () => fetchVehicleMakes(year),
    enabled: !!year,
  });

  return { data, status };
};
