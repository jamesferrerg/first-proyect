import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import item from "./item.json";
import styles from "./ItemDeteails.module.css";

export function ItemsDetails() {
  // para pasar un parametro como por ejem. un id useParams
  const { itemId } = useParams();
  const [item, setItems] = useState(null);

  useEffect(() => {
    get("/movie/" + itemId).then(data => {
      setItems(data);
    })
  }, [itemId])

  if (!item) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + item.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img className={`${styles.col} ${styles.itemImage}`} src={imageUrl} alt={item.title} />
      <div className={`${styles.col} ${styles.itemDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {item.title}
        </p>
        <p>
            <strong>Genre: </strong>
            {item.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {item.overview}
        </p>
      </div>
    </div>
  );
}
