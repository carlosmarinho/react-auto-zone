import Select from "../../Select/Select";
import { VehicleSelectBarStyled } from "./style";

const VehicleSelectBar = () => {
  return (
    <VehicleSelectBarStyled>
      <Select active={true} placeholder="1 | Year" />
      <Select placeholder="2 | Make" />
      <Select placeholder="3 | Model" />
      <Select placeholder="4 | Engine" />
    </VehicleSelectBarStyled>
  );
};

export default VehicleSelectBar;
