import { useQuery } from "@tanstack/react-query";
import { fetchVehicleMakes } from "../../api";
import { VehicleMake } from "../Vehicle/types";

export const useVehicleMakes = (year: string) => {
  const { data, status } = useQuery<VehicleMake[]>({
    queryKey: ["vehicleMakes", year],
    queryFn: () => fetchVehicleMakes(year),
    enabled: !!year,
  });

  return { data, status };
};
