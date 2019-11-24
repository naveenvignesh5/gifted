import React from "react";
import renderer from "react-test-renderer";

import PaginationTab from "./PaginationTab";

describe("PaginationTab", () => {
  it("snapshot renders", () => {
    const component = renderer.create(
      <PaginationTab totalPages={20} currentPage={1} pageLimit={10} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
