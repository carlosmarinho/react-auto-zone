import { StyledSelect } from "./style";
import { IStyledSelectProps } from "./types";

const Select: React.FC<IStyledSelectProps> = ({
  active = false,
  placeholder = "Select an option",
  options = [],
  value = "",
  onChange,
}) => {
  return (
    <StyledSelect activeSel={active} value={value || ""} onChange={onChange}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => {
        const value =
          typeof option === "object" && option !== null ? option.name : option;
        const key =
          typeof option === "object" && option !== null ? option.id : index;
        return (
          <option key={key} value={value}>
            {value}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default Select;
