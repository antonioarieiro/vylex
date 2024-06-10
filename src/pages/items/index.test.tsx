import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ListItems from "./index";
import { useRouter } from "next/router";
import { deleteItem, editItem, searchItems } from "../api/api";
import { items } from "../../utils/initialData";
import "@testing-library/jest-dom/extend-expect";

jest.mock("next/router", () => ({
  useRouter: jest.fn()
}));

jest.mock("../api/api", () => ({
  deleteItem: jest.fn(),
  editItem: jest.fn(),
  searchItems: jest.fn()
}));

describe("ListItems", () => {
  const mockRouter = { push: jest.fn() };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    jest.clearAllMocks();
  });

  it("renders the list of items", () => {
    render(<ListItems />);
    expect(screen.getByText("Items")).toBeInTheDocument();
    items.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it("opens and closes the delete modal", async () => {
    render(<ListItems />);
    fireEvent.click(screen.getAllByText("Delete")[0]);
    expect(screen.getByText("Delete item")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cancel"));
    await waitFor(() => {
      expect(screen.queryByText("Delete item")).not.toBeInTheDocument();
    });
  });

  it("opens and closes the edit modal", async () => {
    render(<ListItems />);
    fireEvent.click(screen.getAllByText("Editar")[0]);
    expect(screen.getByText("Delete item")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cancel"));
    await waitFor(() => {
      expect(screen.queryByText("Delete item")).not.toBeInTheDocument();
    });
  });

  it("deletes an item successfully", async () => {
    (deleteItem as jest.Mock).mockResolvedValue(true);

    render(<ListItems />);
    fireEvent.click(screen.getAllByText("Delete")[0]);
    fireEvent.click(screen.getByText("Save"));

    await waitFor(() => {
      expect(screen.queryByText(items[0].name)).not.toBeInTheDocument();
    });
  });

  it("edits an item successfully", async () => {
    (editItem as jest.Mock).mockResolvedValue(true);

    render(<ListItems />);
    fireEvent.click(screen.getAllByText("Editar")[0]);
    fireEvent.change(screen.getByLabelText("Nome"), {
      target: { value: "New Name" }
    });
    fireEvent.change(screen.getByLabelText("Descrição"), {
      target: { value: "New Description" }
    });
    fireEvent.click(screen.getByText("Save"));

    await waitFor(() => {
      expect(screen.getByText("New Name")).toBeInTheDocument();
      expect(screen.getByText("New Description")).toBeInTheDocument();
    });
  });

  it("searches for items successfully", async () => {
    const searchedItems = [
      { id: 1, name: "Searched Item", description: "Searched Description" }
    ];
    (searchItems as jest.Mock).mockResolvedValue(searchedItems);

    render(<ListItems />);
    fireEvent.change(screen.getByLabelText("Buscar"), {
      target: { value: "Searched" }
    });

    await waitFor(() => {
      expect(screen.getByText("Searched Item")).toBeInTheDocument();
      expect(screen.getByText("Searched Description")).toBeInTheDocument();
    });
  });

  it("adds a new item", () => {
    render(<ListItems />);
    fireEvent.click(screen.getByText("Adcionar item"));
    expect(mockRouter.push).toHaveBeenCalledWith("/new-item");
  });
});
