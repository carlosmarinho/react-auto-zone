import styled from "styled-components";

export const VehicleBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #f2f2f2;
  box-shadow: inset 0 3px 0 0 #f26100;
  min-width: 250px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const VehicleTextContainer = styled.div`
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

export const VehicleHead = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
`;

export const VehicleText = styled.p`
  margin: 0;
  font-size: 14px;
`;
