import { useContext, useState } from "react";
import heartLogoRed from "../assets/heart-red.svg";
import heartLogo from "../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../context";

export default function AddToFavourite() {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);

  const { weather } = useContext(WeatherContext);

  function checkFavourite() {
    return favourites.some(
      (favourite) => favourite.location === weather.location
    );
  }

  const [isFavourite, toggleFavourite] = useState(checkFavourite());

  const handleFavourite = () => {
    if (isFavourite) {
      removeFromFavourites(weather.location);
    } else {
      addToFavourites(weather.latitude, weather.longitude, weather.location);
    }
    toggleFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          {isFavourite ? (
            <img src={heartLogoRed} alt="heartLogoRed" />
          ) : (
            <img src={heartLogo} alt="heartLogo" />
          )}
        </button>
      </div>
    </div>
  );
}
