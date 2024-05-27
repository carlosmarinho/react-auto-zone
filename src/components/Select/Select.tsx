import { StyledSelect } from "./style";

interface SelectProps {
  active?: boolean;
}

const Select: React.FC<SelectProps> = ({ active = false }) => {
  return (
    <StyledSelect active={active}>
      <option>Select your vehicle</option>
    </StyledSelect>
  );
};

export default Select;
