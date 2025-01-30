/* eslint-disable react/prop-types */
import { FaCartPlus, FaLeaf, FaStar } from "react-icons/fa";
import { IMG_URL } from "../utils/constants";

const MenuCard = ({
  name,
  description,
  imageId,
  isVeg,
  price,
  rating,
  ratingCount,
}) => {
    return (
        <div className="bg-gray-800 text-white  rounded-lg p-4 w-80 flex flex-col justify-between transition-all  hover:shadow-[0px_4px_19px_-9px_rgba(255,255,255,0.4)]">
          
          <img
            src={`${IMG_URL}/${imageId}`}
            alt={name}
            className="rounded-md object-cover h-60 w-full"
          />
    
          
          <div className="flex flex-col mt-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{name}</h3>
              {isVeg ? (
                <FaLeaf className="text-green-400 text-xl" title="Vegetarian" />
              ) : (
                <FaLeaf className="text-red-500 rotate-45 text-xl" title="Non-Vegetarian" />
              )}
            </div>
            <p className="text-gray-400 mt-1 text-sm">{description}</p>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-sm">{rating} ({ratingCount})</span>
              </div>
              <span className="text-lg font-bold text-blue-400">₹{price}</span>
            </div>
          </div>
    
          
          <button className="flex w-auto md:w-[8rem] items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-lg mt-4 transition-all cursor-pointer">
            <FaCartPlus />
            Add to Cart
          </button>
        </div>
      );
};

export default MenuCard;
