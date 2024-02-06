import { render, screen } from "@testing-library/react";
import App from "../../components/App.jsx";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  it("renders App", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("change background color and button text on random color button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Random Color (0)" });

    await user.click(button);

    expect(button.textContent).toMatch("Random Color (1)");
  });
});
