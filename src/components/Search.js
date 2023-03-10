import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export function Search() {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  // const navigate = useNavigate(); se comenta por el uso de useSearchParams
  // Prevenir que se realice en refresh de la pagina o lo que esta por defecto en un formulario
  const handleSubmit = (evn) => {
    evn.preventDefault();
    //navigate("movies/?search=" + searchText);
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search ?? ""}
          autoFocus
          placeholder="Title"
          aria-label="Search items"
          onChange={(evn) => {
            const value = evn.target.value;
            setQuery({ search: value });
          }}
        />
        <FaSearch size={20} className={styles.searchButton} />
      </div>
    </form>
  );
}
