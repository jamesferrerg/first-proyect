import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { ItemCard } from "./ItemCard";
import styles from "./ItemsGrid.module.css";
import { Spinner } from "./Spinner";

export function ItemsGrid() {
  //let items = [];
  // para evitar un ciclo infinito definir un estado y se resuelve
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // promesa
    get("/discover/movie").then((data) => {
      // results es un resultado de la respuesta
      setItems(data.results);
      setIsLoading(false);
    });
    // la siguiente linea con el arreglo se evita los ciclos infinitos
    // el arreglo vacio me define que el efecto solo se ejecutara una sola vez
  }, []);

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
