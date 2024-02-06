import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavBar } from "../../components/navigationBar";

describe("Navigation bar", () => {
  it("should render a nav bar with 6 buttons", () => {
    render(
      <NavBar handleNavClick={() => {}} handleColorChangeClick={() => {}} />
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBeGreaterThan(0);
  });

  it("should call handle color change function", async () => {
    const onClick = vi.fn();
    const onColorClick = vi.fn();
    const user = userEvent.setup();
    render(
      <NavBar handleNavClick={onClick} handleColorChangeClick={onColorClick} />
    );

    const buttons = screen.getAllByRole("button");

    await user.click(buttons[0]);

    expect(onColorClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("should call handle navigation click function", async () => {
    const onClick = vi.fn();
    const onColorClick = vi.fn();
    const user = userEvent.setup();
    render(
      <NavBar handleNavClick={onClick} handleColorChangeClick={onColorClick} />
    );

    const buttons = screen.getAllByRole("button");

    await user.click(buttons[1]);

    expect(onClick).toHaveBeenCalled();
    expect(onColorClick).toHaveBeenCalledTimes(0);
  });
});
