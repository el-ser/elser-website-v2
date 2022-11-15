import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HeroPage from "../components/about/parallax-pages/hero-page";
import About from "../pages/index";
beforeAll(() => {
  render(<About />);
});

describe("About page", () => {
  test("Hero section is available", () => {
    const heroSection = screen.getByTitle("hero-section");

    expect(heroSection).toBeInTheDocument();
  });
  test("About me section is available", () => {
    const aboutMeSection = screen.getByTitle("about-me-section");
  });
  test("Tester phase section is available", () => {});
  test("Lets connect section is available", () => {});
  // it("Correct her text", () => {
  //   // render(<HeroPage />);
  //   const heroText = screen.getByRole("heading");
  //   expect(heroText).toBeInTheDocument();
  //   expect(heroText).toHaveTextContent("Hey there! I am");
  // });
  // it("Renders hero page", () => {
  //   const HeroPage = screen.getByText("Hey there! I am", { exact: true });
  //   // expect(heroPage).toBeInTheDocument();
  //   const name = screen.getAllByTitle;
  // });
  // it("Renders about me page", () => {});
});
