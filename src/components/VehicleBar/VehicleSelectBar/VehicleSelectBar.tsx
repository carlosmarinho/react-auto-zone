import { VehicleSelect, VehicleSelectBarStyled } from "./style";

const VehicleSelectBar = () => {
  return (
    <VehicleSelectBarStyled>
      <VehicleSelect active>
        <option>Select your vehicle</option>
      </VehicleSelect>
      <VehicleSelect>
        <option>Select your vehicle</option>
      </VehicleSelect>
      <VehicleSelect>
        <option>Select your vehicle</option>
      </VehicleSelect>
      <VehicleSelect>
        <option>Select your vehicle</option>
      </VehicleSelect>
    </VehicleSelectBarStyled>
  );
};

export default VehicleSelectBar;
