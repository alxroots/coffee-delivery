// TODO: create test for cart component
import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { Cart } from "../../../components/cart/Cart.tsx";
import { renderWithTheme } from "../../utils/renderWithTheme.tsx";

describe("Cart Component", () => {
  it("should render the cart component without badge", () => {
    renderWithTheme(<Cart />);
    const ariaLabel = screen.getByLabelText("Cart Icon");
    expect(ariaLabel).toBeInTheDocument();
  });
  it("should render the cart component with badge", () => {
    renderWithTheme(<Cart count={1} />);
    const badgeText = screen.getByText("1");
    expect(badgeText).toBeInTheDocument();
  });
});
