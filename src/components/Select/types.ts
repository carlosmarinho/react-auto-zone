interface IOptionObject {
  name: string;
  id: string | number;
}

export interface IStyledSelectProps {
  ariaLabel: string;
  active: boolean;
  placeholder: string;
  options?: number[] | string[] | IOptionObject[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
