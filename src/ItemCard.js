import styles from "./ItemCard.module.css";

export function ItemCard({ item }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + item.poster_path;
  return (
    <li className={styles.itemCard}>
      <img 
        width={230}
        height={345}
        className={styles.itemImage} 
        src={imageUrl} 
        alt={item.title} />
      <div>{item.title}</div>
    </li>
  );
}
