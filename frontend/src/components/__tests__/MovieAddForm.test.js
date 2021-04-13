import { fireEvent, render, screen } from "@testing-library/react";
import { MovieAddForm } from "../MovieAddForm";

test("renders MovieAddForm", () => {
  render(<MovieAddForm />);
  const titleLabelEl = screen.getByText("Title");
  expect(titleLabelEl).toBeInTheDocument();

  const genreLabelEl = screen.getByText("Genre");
  expect(genreLabelEl).toBeInTheDocument();

  const descriptionLabelEl = screen.getByText("Description");
  expect(descriptionLabelEl).toBeInTheDocument();
});

test("MovieAddForm onChange", async () => {
  const component = render(<MovieAddForm />);
  const MovieAddFormEl = await component.findByTestId("MovieAdd");

  const inputTitleEl = MovieAddFormEl.querySelector("input[name='title']");
  fireEvent.change(inputTitleEl, {
    target: { value: "Reservoir Dogs" },
  });
  expect(inputTitleEl.value).toEqual("Reservoir Dogs");

  const inputGenreEl = MovieAddFormEl.querySelector("input[name='genre']");
  fireEvent.change(inputGenreEl, {
    target: { value: "Action" },
  });
  expect(inputGenreEl.value).toEqual("Action");

  const inputDescriptionEl = MovieAddFormEl.querySelector(
    "input[name='description']"
  );
  fireEvent.change(inputDescriptionEl, {
    target: { value: "Tarantino" },
  });
  expect(inputDescriptionEl.value).toEqual("Tarantino");
});
