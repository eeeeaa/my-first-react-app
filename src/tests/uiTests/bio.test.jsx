import { render, screen } from "@testing-library/react";
import { Bio } from "../../components/bio.jsx";
import { describe, it, expect } from "vitest";

describe("Bio page", () => {
  it("renders correct heading", () => {
    render(<Bio />);
    expect(
      screen.getByRole("heading", { name: "Welcome to my website!" })
    ).toBeDefined();
  });
});
