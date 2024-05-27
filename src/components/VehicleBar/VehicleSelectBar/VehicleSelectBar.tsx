import Select from "../../Select/Select";
import { VehicleSelectBarStyled } from "./style";
import { getYearOptions } from "../../../utils";
import { useState } from "react";
import { useVehicleMakes } from "../../hooks/useVehicleMakes";
import { VehicleMake } from "../../Vehicle/types";

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

const VehicleSelectBar = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");

  const { data, status } = useVehicleMakes(year);
  const vehicleMakes = processVehicleMakes(data);

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
