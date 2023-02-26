import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { ItemCard } from "./ItemCard";
import styles from "./ItemsGrid.module.css";
import { Spinner } from "./Spinner";
import { useSearchParams } from "react-router-dom";

export function ItemsGrid() {
  //let items = [];
  // para evitar un ciclo infinito definir un estado y se resuelve
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [query] = useSearchParams();
  const search = query.get("search");

  // para que se ejecute nuevamente debe pasarse un parametro de lo contrario se ejecuta una sola vez
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    // promesa
    get(searchUrl).then((data) => {
      // results es un resultado de la respuesta
      setItems(data.results);
      setIsLoading(false);
    });
    // la siguiente linea con el arreglo se evita los ciclos infinitos
    // el arreglo vacio me define que el efecto solo se ejecutara una sola vez
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.itemsGrid}>
      {items.map((movie) => (
        <ItemCard key={movie.id} item={movie} />
      ))}
    </ul>
  );
}
