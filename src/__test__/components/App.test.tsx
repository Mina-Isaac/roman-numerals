import React from "react";
import ReactDOM from "react-dom";
import App from "../../Components/App";
import renderer from "react-test-renderer";

describe("App component should render without issues", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
