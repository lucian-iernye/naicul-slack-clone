import React from "react";
import { render } from "@testing-library/react";
import SidebarOption from "./SidebarOption";

describe("SidebarOption tests", () => {
  it("should render", () => {
    expect(render(<SidebarOption />)).toBeTruthy();
  });
});
