import { IVehicleModelType } from "../Vehicle/types";
import { fetchVehicleModels } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const useVehicleModels = (make: string) => {
  const { data: vehicleModels, status } = useQuery<IVehicleModelType[]>({
    queryKey: ["vehicleModels", make],
    queryFn: () => fetchVehicleModels(make),
    enabled: !!make,
  });

  const models = useMemo(
    () =>
      vehicleModels
        ?.map((item) => ({ id: item.Model_ID, name: item.Model_Name }))
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i) || [],
    [vehicleModels]
  );

  return { models, status };
};

export default useVehicleModels;
