import { render, screen } from "@testing-library/react";
import { MovieAddForm } from "../MovieAddForm";

test("renders MovieAddForm", () => {
  const component = render(<MovieAddForm />);
  const titleLabelEl = screen.getByText("Title");
  expect(titleLabelEl).toBeInTheDocument();

  const genreLabelEl = screen.getByText("Genre");
  expect(genreLabelEl).toBeInTheDocument();

  const descriptionLabelEl = screen.getByText("Description");
  expect(descriptionLabelEl).toBeInTheDocument();

  const inputTitleEl = component.querySelector("input[name='title']");
});
