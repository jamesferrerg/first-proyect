import { useSearchParams } from "react-router-dom";
import { ItemsGrid } from "../components/ItemsGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";

export function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);
  return (
    <div>
      <Search />
      <ItemsGrid key={debouncedSearch} search={debouncedSearch}/>
    </div>
  );
}
