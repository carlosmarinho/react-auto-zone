import Select from "../../Select/Select";
import { VehicleSelectBarStyled } from "./style";
import { getYearOptions } from "../../../utils";
import { useState } from "react";
import { useVehicleMakes } from "../../hooks/useVehicleMakes";
import { IVehicleModelType, VehicleMake } from "../../Vehicle/types";
import { useQuery } from "@tanstack/react-query";
import { fetchVehicleModels } from "../../../api";

const processVehicleMakes = (data: VehicleMake[] | undefined) => {
  return (
    data
      ?.sort((a, b) => a.MakeName.localeCompare(b.MakeName))
      .reduce((acc: VehicleMake[], current: VehicleMake) => {
        const x = acc.find((item) => item.MakeId === current.MakeId);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, [])
      .map((opt) => ({ id: opt.MakeId, name: opt.MakeName })) || []
  );
};

const processVehicleModels = (data: IVehicleModelType[] | undefined) => {
  return (
    data
      ?.sort((a, b) => a.Model_Name.localeCompare(b.Model_Name))
      ?.reduce((acc: IVehicleModelType[], current: IVehicleModelType) => {
        const x = acc.find((item) => item.Model_ID === current.Model_ID);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, [])
      .map((opt) => ({ id: opt.Model_ID, name: opt.Model_Name })) || []
  );
};

const VehicleSelectBar = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");

  const { data, status } = useVehicleMakes(year);
  const vehicleMakes = processVehicleMakes(data);

  const { data: vehicleModels, status: modelStatus } = useQuery<
    IVehicleModelType[]
  >({
    queryKey: ["vehicleModels", make],
    queryFn: () => fetchVehicleModels(make),
    enabled: !!make,
  });
  const models = processVehicleModels(vehicleModels);

  console.log("\n\n***\n vehicleModels: ", vehicleModels, "\n***\n");

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
