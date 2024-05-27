import { useQuery } from "@tanstack/react-query";
import Select from "../../Select/Select";
import { VehicleSelectBarStyled } from "./style";
import { getYearOptions } from "../../../utils";
import { fetchVehicleMakes } from "../../../api";
import { useState } from "react";

const VehicleSelectBar = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");

  const { data, status } = useQuery<VehicleMake[]>({
    queryKey: ["vehicleMakes"],
    queryFn: fetchVehicleMakes,
  });

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
        placeholder="2 | Make"
        options={
          status === "success"
            ? data.map((opt) => ({ id: opt.Make_ID, name: opt.Make_Name }))
            : []
        }
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <Select
        placeholder="3 | Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <Select
        placeholder="4 | Engine"
        value={engine}
        onChange={(e) => setEngine(e.target.value)}
      />
    </VehicleSelectBarStyled>
  );
};

export default VehicleSelectBar;
