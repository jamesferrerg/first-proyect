import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { ItemCard } from "./ItemCard";
import styles from "./ItemsGrid.module.css";

export function ItemsGrid() {
  //let items = [];
  // para evitar un ciclo infinito definir un estado y se resuelve
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    // promesa
    get("/discover/movie").then((data) => {
        // results es un resultado de la respuesta
        setItems(data.results);
      });
      // la siguiente linea con el arreglo se evita los ciclos infinitos
      // el arreglo vacio me define que el efecto solo se ejecutara una sola vez
    }, []);
  return (
    <ul className={styles.itemsGrid}>
      {items.map((movie) => (
        <ItemCard key={movie.id} item={movie} />
      ))}
    </ul>
  );
}
