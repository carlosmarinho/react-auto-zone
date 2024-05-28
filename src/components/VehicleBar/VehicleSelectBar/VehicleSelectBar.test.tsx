import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VehicleSelectBar from "./VehicleSelectBar";
import { fetchVehicleMakes } from "../../../api";
import { customRender } from "../../../test/util";

jest.mock("../../../api", () => ({
  fetchVehicleMakes: jest.fn(),
}));

const makes = [
  { MakeId: 1, MakeName: "Toyota" },
  { MakeId: 2, MakeName: "Honda" },
  { MakeId: 3, MakeName: "Wolksvagen" },
  { MakeId: 4, MakeName: "Ford" },
];

const mockYear = "2020";

const setup = async () => {
  customRender(<VehicleSelectBar />);
  const yearSelect = screen.getByRole("combobox", { name: /select year/i });
  await userEvent.selectOptions(yearSelect, [mockYear]);
  return { yearSelect };
};

describe("VehicleSelectBar", () => {
  it("renders the correct placeholders", () => {
    customRender(<VehicleSelectBar />);
    expect(screen.getByText("1 | Year")).toBeInTheDocument();
    expect(screen.getByText("2 | Make")).toBeInTheDocument();
    expect(screen.getByText("3 | Model")).toBeInTheDocument();
    expect(screen.getByText("4 | Engine")).toBeInTheDocument();
  });

  it("calls the onChange handlers for year Select when changing the select year component", async () => {
    const { yearSelect } = await setup();
    expect(yearSelect).toHaveValue(mockYear);
  });

  it("should load the select make with the data makes loaded from api", async () => {
    (fetchVehicleMakes as jest.Mock).mockImplementation((year) => {
      if (year === mockYear) {
        return Promise.resolve(makes);
      }

      return Promise.resolve([]);
    });

    const { yearSelect } = await setup();
    expect(yearSelect).toHaveValue(mockYear);

    const makeSelect = screen.getByRole("combobox", { name: /select make/i });
    const options = await within(makeSelect).findByText("Toyota");

    console.log("\n\n***\n options: ", options, "\n***\n");
  });
});
