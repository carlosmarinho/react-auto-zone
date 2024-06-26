import styled from "styled-components";

type SelectProps = {
  activeSel?: boolean;
  [key: string]: unknown;
};

export const StyledSelect = styled(({ activeSel, ...props }: SelectProps) => (
  <select {...props} />
))<SelectProps>`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #000;
  border-bottom: ${(props) =>
    props.activeSel ? "2px solid #f26100" : "1px solid #000"};
  border-radius: 5px;
  background-color: ${(props) => (props.activeSel ? "#fff" : "#f2f2f2")};
  color: ${(props) => (props.activeSel ? "#333" : "#bbb")};
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
