const API = "https://api.themoviedb.org/3";

export async function get(path) {

  const response = await fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGQ0YzViYjA3OTIxNzExYjg3OTM3ZTU5MGU1OWZkYyIsInN1YiI6IjYzZWFkM2Q0ZjkyNTMyMDBjM2ZlZWMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.piY_5j53vjYMjzUv9vNGnKxGwccvKEjTcvzVAzWFL6Y",
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const items = await response.json();

  return items;
}
