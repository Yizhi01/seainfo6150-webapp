import React from "react";
import ArticleList from "./ArticleList";
import { fireEvent } from "@testing-library/react";

describe("ArrticleList tests", () => {
  it("renders correctly", () => {
    const testList = [{"title" : "Story1", "slug" : "Test1"}, {"title" : "Story2u", "slug" : "Test2"}];
    const { container } = render(
      <ArticleList articles={testList} />
    );
    expect(container).toMatchSnapshot();
  });
});