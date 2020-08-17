import React from "react";
import { render } from "@testing-library/react";
import Chat from "./Chat";

describe("Chat tests", () => {
  it("should render", () => {
    expect(render(<Chat />)).toBeTruthy();
  });
});
