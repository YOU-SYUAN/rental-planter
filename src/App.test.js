import { render, screen } from "@testing-library/react";
import Main from "./pages/Main";

test.skip("renders learn react link", () => {
  render(<Main />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
