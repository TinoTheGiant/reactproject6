import './App.css'


  const movies = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
    { id: 2, title: 'The Godfather', genre: 'Crime', rating: 9.2 },
    { id: 3, title: 'The Dark Knight', genre: 'Action', rating: 9.0 },
    { id: 4, title: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
    { id: 5, title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7 },
    { id: 6, title: 'The Lion King', genre: 'Animation', rating: 8.5 },
  ];

function Component1() {

  return(
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
        <b>{movie.title}</b><i> ({movie.genre}) </i>Rating: {movie.rating}
        </li>
      ))} 
    </ul>
  )
}

function Component2() {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id} style={{ color: movie.genre === 'Sci-Fi' ? 'red' : 'white' }}>
         <b>{movie.title}</b><i> ({movie.genre}) </i>Rating: {movie.rating}
        </li>
      ))}
    </ul>
  );
};

function Component3() {
  return (
    <ul>
      {movies
        .filter(movie => movie.rating >= 8.8)
        .map(movie => (
          <li key={movie.id}>
            <b>{movie.title}</b><i> ({movie.genre}) </i>Rating: {movie.rating}
          </li>
        ))}
    </ul>
  );
};

export default function App() {
  return (
    <div>
      <h1>Movie List 1</h1>
      <Component1 />
      <h1>Movie List 2</h1>
      <Component2 />
      <h1>Movie List 3</h1>
      <Component3 />
    </div>
  )
}