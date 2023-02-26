import { Link } from "react-router-dom";
import styles from "./ItemCard.module.css";
import placeholder from "../placeholder.jpg"
import { getItemImg } from "../utils/getItemImg";

export function ItemCard({ item }) {
  const imageUrl = getItemImg(item.poster_path, 300);
  //const imageUrl = item.poster_path ? "https://image.tmdb.org/t/p/w300" + item.poster_path :  placeholder;
  return (
    <li className={styles.itemCard}>
      <Link to={"/items/" + item.id}>
        <img
          width={230}
          height={345}
          className={styles.itemImage}
          src={imageUrl}
          alt={item.title}
        />
      </Link>
      <div>{item.title}</div>
    </li>
  );
}
