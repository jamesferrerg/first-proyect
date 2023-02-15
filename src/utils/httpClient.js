const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGQ0YzViYjA3OTIxNzExYjg3OTM3ZTU5MGU1OWZkYyIsInN1YiI6IjYzZWFkM2Q0ZjkyNTMyMDBjM2ZlZWMzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.piY_5j53vjYMjzUv9vNGnKxGwccvKEjTcvzVAzWFL6Y",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
