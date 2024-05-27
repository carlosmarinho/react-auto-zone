import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";

describe("Select", () => {
  const options = [
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
    { id: "3", name: "Option 3" },
  ];

  const onChange = jest.fn();

  beforeEach(() => {
    render(
      <Select
        ariaLabel="test select"
        active={true}
        placeholder="Select an option"
        options={options}
        value={options[0].name}
        onChange={onChange}
      />
    );
  });

  it("renders the correct options", () => {
    render(
      <Select
        ariaLabel="test select"
        active={true}
        placeholder="Select an option"
        options={options}
        value={options[0].name}
        onChange={onChange}
      />
    );

    options.forEach((option) => {
      expect(screen.getByText(option.name)).toBeInTheDocument();
    });
  });

  it("calls onChange when an option is selected", () => {
    render(
      <Select
        ariaLabel="test select"
        active={true}
        placeholder="Select an option"
        options={options}
        value={options[0].name}
        onChange={onChange}
      />
    );

    userEvent.selectOptions(screen.getByLabelText("test select"), [
      options[1].name,
    ]);
    expect(onChange).toHaveBeenCalled();
  });
});
