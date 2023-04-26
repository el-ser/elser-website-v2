import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import AboutMe from "./about-me";

beforeAll(() => {
  render(<AboutMe />);
});

describe("About Me", () => {
  it("render icons", () => {
    console.log("sample");
  });
});
