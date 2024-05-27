import styled from "styled-components";

export const VehicleSelectBarStyled = styled.div`
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

export const VehicleSelect = styled.select<{ active?: boolean }>`
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
    width: 24%;
  }

  @media (min-width: 1024px) {
    width: 23%;
  }
`;
