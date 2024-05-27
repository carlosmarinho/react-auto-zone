import styled from "styled-components";

const VehicleBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #f2f2f2;
  box-shadow: inset 0 3px 0 0 #f26100;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const VehicleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: initial;
    margin-bottom: 30px;
  }

  @media (min-width: 1024px) {
    min-width: 160px;
    max-width: 160px;
    margin-bottom: initial;
  }
`;

const VehicleSelectBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: initial;
  }
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
  margin-bottom: 10px;
  width: 90%;
  height: 50px;
  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: initial;
    width: 20%;
  }

  @media (min-width: 1024px) {
    width: 18%;
  }
`;

const VehicleBar = () => {
  return (
    <VehicleBarContainer>
      <VehicleTextContainer>
        <VehicleHead>ADD YOUR VEHICLE</VehicleHead>
        <VehicleText>Get an exact fit for your vehicle.</VehicleText>
      </VehicleTextContainer>
      <VehicleSelectBar>
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
      </VehicleSelectBar>
    </VehicleBarContainer>
  );
};

export default VehicleBar;
