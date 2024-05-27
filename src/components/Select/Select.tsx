import { StyledSelect } from "./style";

interface SelectProps {
  active?: boolean;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  active = false,
  placeholder = "Select an option",
}) => {
  return (
    <StyledSelect active={active}>
      <option value="" disabled selected>
        {placeholder}
      </option>
    </StyledSelect>
  );
};

export default Select;
