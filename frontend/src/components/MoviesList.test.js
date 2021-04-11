import { render, screen } from "@testing-library/react";
import { MoviesList } from "./MoviesList";

const moviesSampleData = [
  { id: "1", name: "The Lord of the Rings", genre: "Fantasy" },
  { id: "2", name: "Die Hard", genre: "Xmas" },
  { id: "3", name: "IT", genre: "Horror" },
];

test("renders MoviesList correctly", () => {
  render(<MoviesList movies={moviesSampleData} />);
  const diehardElement = screen.getByText("Die Hard");
  expect(diehardElement).toBeInTheDocument();

  const genreElement = screen.getByText("Genre: Xmas");
  console.log("genreElement:", genreElement);
  expect(genreElement).toBeInTheDocument();
});
