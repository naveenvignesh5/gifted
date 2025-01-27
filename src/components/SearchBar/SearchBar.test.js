import React from "react";
import renderer from "react-test-renderer";

import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("snapshot renders", () => {
    const component = renderer.create(
      <SearchBar />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
