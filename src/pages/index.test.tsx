import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./index";
import { useRouter } from "next/router";
import { items } from "../utils/initialData";

jest.mock("next/router", () => ({
  useRouter: jest.fn()
}));

jest.mock("./api/api", () => ({
  deleteItem: jest.fn(),
  editItem: jest.fn()
}));

describe("Home Page", () => {
  const mockRouter = { push: jest.fn() };
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    jest.clearAllMocks();
  });

  it("renders the home page with initial items", () => {
    render(<Home />);
    items.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it("opens the delete modal when delete button is clicked", () => {
    render(<Home />);
    fireEvent.click(screen.getAllByText("Delete")[0]);
    expect(screen.getByText("Delete item")).toBeInTheDocument();
  });

  it("opens the edit modal when edit button is clicked", () => {
    render(<Home />);
    fireEvent.click(screen.getAllByText("Editar")[0]);
    expect(screen.getByPlaceholderText("Nome do item")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Descrição")).toBeInTheDocument();
  });

  it("navigates to new item page when add button is clicked", () => {
    render(<Home />);
    fireEvent.click(screen.getByText("Adcionar item"));
    expect(mockRouter.push).toHaveBeenCalledWith("/new-item");
  });

  it("displays a toast message on successful edit", async () => {
    const { editItem } = require("./api/api");
    editItem.mockResolvedValue(true);
    render(<Home />);

    fireEvent.click(screen.getAllByText("Editar")[0]);
    fireEvent.change(screen.getByPlaceholderText("Nome do item"), {
      target: { value: "New Name" }
    });
    fireEvent.click(screen.getByText("Save"));

    expect(
      await screen.findByText("Item updated successfully")
    ).toBeInTheDocument();
  });
});
