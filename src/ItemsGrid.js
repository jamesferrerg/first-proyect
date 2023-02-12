import { ItemCard } from "./ItemCard";
import items from "./items.json"
import styles from "./ItemsGrid.module.css"

export function ItemsGrid() {
  return (
    <ul className={styles.itemsGrid}>
      {items.map((movie) => (
          <ItemCard key={movie.id} item={movie} />
      ))}
    </ul>
  );
}
