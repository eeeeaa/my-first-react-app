import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavBar } from "../../components/navigationBar";

vi.mock("react-router-dom", () => ({
  Link: () => {},
}));

describe("Navigation bar", () => {
  it("should render a nav bar with 6 buttons", () => {
    render(<NavBar handleColorChangeClick={() => {}} />);

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBeGreaterThan(0);
  });

  it("should call handle color change function", async () => {
    const onColorClick = vi.fn();
    const user = userEvent.setup();
    render(<NavBar handleColorChangeClick={onColorClick} />);

    const buttons = screen.getAllByRole("button");

    await user.click(buttons[0]);

    expect(onColorClick).toHaveBeenCalled();
  });
});
