import React from "react";
import { render } from "@testing-library/react";
import ChatInput from "./ChatInput";

describe("ChatInput tests", () => {
  it("should render", () => {
    expect(render(<ChatInput />)).toBeTruthy();
  });
});
