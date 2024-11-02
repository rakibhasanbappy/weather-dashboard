import { useContext, useState } from "react";
import heartLogo from "../assets/heart.svg";
import { FavouriteContext, LocationContext } from "../context";

export default function FavouriteModal() {
  const [isOpen, setIsOpen] = useState(false);

  const { favourites } = useContext(FavouriteContext);
  const { setLocation } = useContext(LocationContext);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={handleOpen}
        className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      >
        <img src={heartLogo} alt="" />
        <span>Favourite Locations</span>
      </div>

      {/* <!-- Modal --> */}

      {isOpen && (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
          <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
          <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
            {favourites.length === 0 && (
              <li className="text-center">No Favourite Locations</li>
            )}
            {favourites.map((favourite) => (
              <li
                key={favourite.location}
                className="hover:bg-gray-200"
                onClick={() => {
                  setLocation({ ...favourite });
                  setIsOpen(false);
                }}
              >
                {favourite.location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
