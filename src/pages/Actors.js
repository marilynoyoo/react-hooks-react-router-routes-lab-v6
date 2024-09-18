import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch actors data from your API or JSON server
    fetch("http://localhost:4000/actors")
      .then((response) => response.json())
      .then((data) => {
        setActors(data);
        setLoading(false);  // Data loaded, so set loading to false
      })
      .catch((error) => {
        console.error("Error fetching actors:", error);
        setLoading(false);  // Even in case of error, stop loading
      });
  }, []);

  // Render the actors data as an article
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {loading ? (
          <p>Loading actors...</p>  // Loading message while data is being fetched
        ) : (
          actors.map((actor) => (
            <article key={actor.name}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        )}
      </main>
    </>
  );
}

export default Actors;
