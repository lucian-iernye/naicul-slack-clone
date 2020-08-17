import React from "react";
import { render } from "@testing-library/react";
import Message from "./Message";

describe("Message tests", () => {
  it("should render", () => {
    expect(render(<Message />)).toBeTruthy();
  });
});
