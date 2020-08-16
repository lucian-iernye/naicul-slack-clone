import React from "react";
import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";

describe("Sidebar tests", () => {
  it("should render", () => {
    expect(render(<Sidebar />)).toBeTruthy();
  });
});
