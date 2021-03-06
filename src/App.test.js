import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Welcome message", () => {
  render(<App />);
  const h1Element = screen.getByText(/Welcome/i);
  expect(h1Element).toBeInTheDocument();
});
