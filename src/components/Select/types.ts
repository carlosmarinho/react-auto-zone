export interface OptionObject {
  name: string;
  id: string | number;
}

export interface StyledSelectProps {
  active?: boolean;
  placeholder?: string;
  options?: number[] | string[] | OptionObject[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
