import React from "react";
import ArticleListItem from "./ArticleListItem";
import { fireEvent } from "@testing-library/react";

describe("ArticleListItem tests", () => {
  it("renders correctly after button is clicked", () => {
    const testArtile = {'title' : 'Test'};
    const { container, getByText } = render(
      <ArticleListItem article={testArtile} />
    );
    const button = getByText("Show more");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});