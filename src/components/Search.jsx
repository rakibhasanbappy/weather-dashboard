import { useContext } from "react";
import searchLogo from "../assets/search.svg";
import { LocationContext } from "../context";
import { getLocationByName } from "../data/location-data";
import { useDebounce } from "../hooks";

export default function Search() {
  // const [search, setSearch] = useState("");
  const { setLocation } = useContext(LocationContext);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const location = getLocationByName(search);
  //   setLocation({ ...location });
  //   setSearch("");
  // }

  const doSearch = useDebounce((term) => {
    const location = getLocationByName(term);
    setLocation({ ...location });
  }, 500);

  function handleChange(e) {
    const value = e.target.value;
    // setSearch(value);
    doSearch(value);
  }

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          // value={search}
          onChange={handleChange}
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={searchLogo} />
        </button>
      </div>
    </form>
  );
}
