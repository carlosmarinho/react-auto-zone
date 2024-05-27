import VehicleSelectBar from "./VehicleSelectBar/VehicleSelectBar";
import {
  VehicleBarContainer,
  VehicleHead,
  VehicleText,
  VehicleTextContainer,
} from "./style";

const VehicleBar = () => {
  return (
    <VehicleBarContainer>
      <VehicleTextContainer>
        <VehicleHead>ADD YOUR VEHICLE</VehicleHead>
        <VehicleText>Get an exact fit for your vehicle.</VehicleText>
      </VehicleTextContainer>
      <VehicleSelectBar />
    </VehicleBarContainer>
  );
};

export default VehicleBar;
