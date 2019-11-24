import React from "react";
import renderer from "react-test-renderer";

import GifView from "./GifView";

describe("GifView", () => {
  it("snapshot renders", () => {
    const component = renderer.create(
      <GifView src="https://media.giphy.com/media/J4CLEVEHB7L1n8uBbW/source.gif" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
