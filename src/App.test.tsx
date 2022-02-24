import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("shows the url that Environment Enforcer determined for the test environment", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  const apiUrlDiv = screen.getByTestId("my-api-url-test");
  expect(apiUrlDiv).toBeInTheDocument();
  expect(apiUrlDiv).toHaveTextContent("https://fakeUrlForTestEnvironment.com");
});
