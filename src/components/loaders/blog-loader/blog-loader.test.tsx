import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import BlogLoader from "./blog-loader";

describe("Blog Loader", () => {
  beforeEach(() => {
    render(<BlogLoader />);
  });
  it("renders loader container", () => {
    render(<BlogLoader />);
    const container = document.getElementById("loader-container");

    expect(container).toBeVisible();
  });
  it("renders image holder", () => {
    const container = document.getElementById("image-holder");

    expect(container).toBeVisible();
  });
  it("renders date holder", () => {
    const container = document.getElementById("date-holder");

    expect(container).toBeVisible();
  });
  it("renders details container", () => {
    const container = document.getElementById("details-holder");

    expect(container).toBeVisible();
  });
});
