import { useContext, useState } from "react";
import searchLogo from "../assets/search.svg";
import { LocationContext } from "../context";
import { getLocationByName } from "../data/location-data";

export default function Search() {
  const [search, setSearch] = useState("");
  const { setLocation } = useContext(LocationContext);

  function handleSubmit(e) {
    e.preventDefault();
    const location = getLocationByName(search);
    setLocation({ ...location });
    setSearch("");
  }

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Location"
          required
        />
        <button type="submit" onClick={handleSubmit}>
          <img src={searchLogo} />
        </button>
      </div>
    </form>
  );
}
