import Select from "../../Select/Select";
import { VehicleSelectBarStyled } from "./style";

const VehicleSelectBar = () => {
  return (
    <VehicleSelectBarStyled>
      <Select active={true} />
      <Select />
      <Select />
      <Select />
    </VehicleSelectBarStyled>
  );
};

export default VehicleSelectBar;
