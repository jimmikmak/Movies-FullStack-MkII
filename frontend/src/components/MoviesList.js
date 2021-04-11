export const MoviesList = (props) => {
  return (
    <ul>
      {props.movies.map((el) => {
        return (
          <li key={el.id}>
            <h2>{el.name}</h2>
            <h3>Genre: {el.genre}</h3>
          </li>
        );
      })}
    </ul>
  );
};
