import Select from "../../Select/Select";
import { VehicleSelectBarStyled } from "./style";
import { getYearOptions } from "../../../utils";
import { useState } from "react";
import { useVehicleMakes } from "../../hooks/useVehicleMakes";
import useVehicleModels from "../../hooks/useVehicleModels";

const VehicleSelectBar = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");

  const { makes, status } = useVehicleMakes(year);

  const { models, status: modelStatus } = useVehicleModels(make);

  return (
    <VehicleSelectBarStyled>
      <Select
        ariaLabel="Select Year"
        active={true}
        placeholder="1 | Year"
        options={getYearOptions()}
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <Select
        ariaLabel="Select Make"
        active={year !== ""}
        placeholder="2 | Make"
        options={status === "success" ? makes : []}
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <Select
        ariaLabel="Select Model"
        active={make !== ""}
        placeholder="3 | Model"
        value={model}
        options={modelStatus === "success" ? models : []}
        onChange={(e) => setModel(e.target.value)}
      />
      <Select
        ariaLabel="Select Engine"
        active={model !== ""}
        placeholder="4 | Engine"
        value={engine}
        onChange={(e) => setEngine(e.target.value)}
      />
    </VehicleSelectBarStyled>
  );
};

export default VehicleSelectBar;
