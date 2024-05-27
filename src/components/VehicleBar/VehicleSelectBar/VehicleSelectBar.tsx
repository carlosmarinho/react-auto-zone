import Select from "../../Select/Select";
import { VehicleSelectBarStyled } from "./style";
import { getYearOptions, processVehicleData } from "../../../utils";
import { useState } from "react";
import { useVehicleMakes } from "../../hooks/useVehicleMakes";
import { IVehicleModelType } from "../../Vehicle/types";
import { useQuery } from "@tanstack/react-query";
import { fetchVehicleModels } from "../../../api";

const VehicleSelectBar = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");

  const { data, status } = useVehicleMakes(year);
  const vehicleMakes = processVehicleData(
    data,
    (item) => item.MakeId,
    (item) => item.MakeName
  );

  const { data: vehicleModels, status: modelStatus } = useQuery<
    IVehicleModelType[]
  >({
    queryKey: ["vehicleModels", make],
    queryFn: () => fetchVehicleModels(make),
    enabled: !!make,
  });
  const models = processVehicleData(
    vehicleModels,
    (item) => item.Model_ID,
    (item) => item.Model_Name
  );

  return (
    <VehicleSelectBarStyled>
      <Select
        active={true}
        placeholder="1 | Year"
        options={getYearOptions()}
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <Select
        active={year !== ""}
        placeholder="2 | Make"
        options={status === "success" ? vehicleMakes : []}
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <Select
        active={make !== ""}
        placeholder="3 | Model"
        value={model}
        options={modelStatus === "success" ? models : []}
        onChange={(e) => setModel(e.target.value)}
      />
      <Select
        active={model !== ""}
        placeholder="4 | Engine"
        value={engine}
        onChange={(e) => setEngine(e.target.value)}
      />
    </VehicleSelectBarStyled>
  );
};

export default VehicleSelectBar;
