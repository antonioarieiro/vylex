import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddNewItem from "./index";
import { useRouter } from "next/router";
import { addNewItem } from "../api/api";
import { items } from "../../utils/initialData";
import "@testing-library/jest-dom/extend-expect";

jest.mock("next/router", () => ({
  useRouter: jest.fn()
}));

jest.mock("../api/api", () => ({
  addNewItem: jest.fn()
}));

describe("AddNewItem", () => {
  const mockRouter = { push: jest.fn() };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    jest.clearAllMocks();
  });

  it("renders the add new item form", () => {
    render(<AddNewItem />);
    expect(screen.getByText("Registrar novo item")).toBeInTheDocument();
    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
    expect(screen.getByLabelText("Descrição")).toBeInTheDocument();
    expect(screen.getByText("Registrar")).toBeInTheDocument();
  });

  it("enables the submit button when name and description are provided", () => {
    render(<AddNewItem />);
    fireEvent.change(screen.getByLabelText("Nome"), {
      target: { value: "Item 1" }
    });
    fireEvent.change(screen.getByLabelText("Descrição"), {
      target: { value: "Descrição do Item 1" }
    });
    expect(screen.getByText("Registrar")).not.toBeDisabled();
  });

  it("calls addNewItem API and shows toast on successful submission", async () => {
    (addNewItem as jest.Mock).mockResolvedValue(true);

    render(<AddNewItem />);
    fireEvent.change(screen.getByLabelText("Nome"), {
      target: { value: "Item 1" }
    });
    fireEvent.change(screen.getByLabelText("Descrição"), {
      target: { value: "Descrição do Item 1" }
    });
    fireEvent.click(screen.getByText("Registrar"));

    await waitFor(() => {
      expect(
        screen.getByText("Item registrado com sucesso!")
      ).toBeInTheDocument();
    });

    expect(items).toContainEqual({
      id: expect.any(Number),
      name: "Item 1",
      description: "Descrição do Item 1"
    });
    expect(mockRouter.push).toHaveBeenCalledWith("/items");
  });

  it("disables the submit button when name or description are missing", () => {
    render(<AddNewItem />);
    fireEvent.change(screen.getByLabelText("Nome"), { target: { value: "" } });
    fireEvent.change(screen.getByLabelText("Descrição"), {
      target: { value: "Descrição do Item 1" }
    });
    expect(screen.getByText("Registrar")).toBeDisabled();

    fireEvent.change(screen.getByLabelText("Nome"), {
      target: { value: "Item 1" }
    });
    fireEvent.change(screen.getByLabelText("Descrição"), {
      target: { value: "" }
    });
    expect(screen.getByText("Registrar")).toBeDisabled();
  });
});
