import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    const newFavourite = { latitude, longitude, location };
    setFavourites([...favourites, newFavourite]);
  };

  const removeFromFavourites = (location) => {
    const newFavourites = favourites.filter(
      (favourite) => favourite.location !== location
    );
    setFavourites(newFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
