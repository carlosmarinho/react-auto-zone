import { useQuery } from "@tanstack/react-query";
import { fetchVehicleMakes } from "../../api";
import { IVehicleMakeType } from "../Vehicle/types";

export const useVehicleMakes = (year: string) => {
  const { data: vehicleMakes, status } = useQuery<IVehicleMakeType[]>({
    queryKey: ["vehicleMakes", year],
    queryFn: () => fetchVehicleMakes(year),
    enabled: !!year,
  });

  const makes =
    vehicleMakes
      ?.map((item) => ({ id: item.MakeId, name: item.MakeName }))
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i) || [];

  return { makes, status };
};
