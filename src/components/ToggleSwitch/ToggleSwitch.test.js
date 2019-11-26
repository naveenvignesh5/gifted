import React from "react";
import renderer from "react-test-renderer";

import ToggleSwitch from "./ToggleSwitch";

describe("ToggleSwitch", () => {
  it("snapshot renders", () => {
    const component = renderer.create(
      <ToggleSwitch />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
