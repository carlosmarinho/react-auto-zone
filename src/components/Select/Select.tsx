import { StyledSelect } from "./style";

interface OptionObject {
  name: string;
  id: string | number;
}

interface SelectProps {
  active?: boolean;
  placeholder?: string;
  options?: number[] | string[] | OptionObject[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
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
