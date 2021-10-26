import { render, screen } from "@testing-library/react";

import { Spinner } from "../../components/Spinner";

describe("Spinner Component", () => {
  it("should render spinner", () => {
    render(
      <Spinner iconSize={40} iconColor="orange" speed="1.8s" timing="linear" />
    );

    const spinner = screen.getByTestId("spinner");

    expect(spinner).toBeInTheDocument();
  });
});
