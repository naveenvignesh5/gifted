import React from "react";
import renderer from "react-test-renderer";

import Navbar from "./Navbar";

describe("Navbar", () => {
  it("snapshot renders", () => {
    const component = renderer.create(
      <Navbar brandName="GIFted" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
