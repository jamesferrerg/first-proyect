import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { ItemCard } from "./ItemCard";
import styles from "./ItemsGrid.module.css";
import { Spinner } from "./Spinner";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export function ItemsGrid({ search }) {
  //let items = [];
  // para evitar un ciclo infinito definir un estado y se resuelve
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // para que se ejecute nuevamente debe pasarse un parametro de lo contrario se ejecuta una sola vez
  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    // promesa
    get(searchUrl).then((data) => {
      // results es un resultado de la respuesta
      setItems(prevItems => prevItems.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
    // la siguiente linea con el arreglo se evita los ciclos infinitos
    // el arreglo vacio me define que el efecto solo se ejecutara una sola vez
  }, [search, page]);

  return (
    // en la funcion next para ir pasando pagina a la siguiente puede realizarse con page + 1 
    // pero es recomendable usar la funcion como se muestra en next, esto es por que se hace
    // de forma asincrona
    <InfiniteScroll
      dataLength={items.length}
      hasMore={hasMore}
      next={() => setPage((prevPage => prevPage + 1))}
      loader={<Spinner />}
    >
      <ul className={styles.itemsGrid}>
        {items.map((movie) => (
          <ItemCard key={movie.id} item={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
