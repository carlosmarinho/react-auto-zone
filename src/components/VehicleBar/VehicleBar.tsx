import styled from "styled-components";

const VehicleBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: #f2f2f2;
  box-shadow: inset 0 3px 0 0 #f26100;
`;

const VehicleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 160px;
  max-width: 160px;
  margin-right: 20px;
`;

const VehicleHead = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
`;

const VehicleText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const VehicleSelect = styled.select<{ active?: boolean }>`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #000;
  border-bottom-color: ${(props) => (props.active ? "#f26100" : "#000")};
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "#fff" : "#f2f2f2")};
  color: #333;
  margin-right: 20px;
  width: 18%;
  height: 50px;
  &:focus {
    outline: none;
  }
`;

const VehicleBar = () => {
  return (
    <VehicleBarContainer>
      <VehicleTextContainer>
        <VehicleHead>ADD YOUR VEHICLE</VehicleHead>
        <VehicleText>Get an exact fit for your vehicle.</VehicleText>
      </VehicleTextContainer>
      <VehicleSelect active>
        <option>Select your vehicle</option>
        {/* Add more options as needed */}
      </VehicleSelect>
      <VehicleSelect>
        <option>Select your vehicle</option>
        {/* Add more options as needed */}
      </VehicleSelect>
      <VehicleSelect>
        <option>Select your vehicle</option>
        {/* Add more options as needed */}
      </VehicleSelect>
      <VehicleSelect>
        <option>Select your vehicle</option>
        {/* Add more options as needed */}
      </VehicleSelect>
    </VehicleBarContainer>
  );
};

export default VehicleBar;
