/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { IMG_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { MdOutlineDeliveryDining } from "react-icons/md";

const RestaurantCard = ({
  id,
  name,
  avgRating,
  ratingCount,
  costForTwo,
  cuisines,
  deliveryTime,
  resImageID,
}) => {
  const navigate = useNavigate();

  const handleResCardClick = () => {
    navigate(`/${id}/menu`);
  };

  return (
    <div
      className="w-[330px] rounded-xl p-3 flex flex-col gap-2 bg-neutral-900 text-white hover:shadow-[0px_4px_19px_-9px_rgba(255,255,255,0.3)] cursor-pointer transition-all"
      onClick={handleResCardClick}
    >
      {/* Image Section */}
      <img
        className="w-[100%] rounded-xl h-[230px] object-cover"
        src={`${IMG_URL}${resImageID}`}
        alt={name}
      />

      {/* Restaurant Info */}
      <div className="flex justify-between mt-2">
        <p className="font-bold">{name}</p>
        <div className="flex items-center bg-green-600 px-2 py-[2px] rounded-md text-white gap-1">
          <p>{avgRating}</p>
          <FaStar style={{ fontSize: "15px" }} />
        </div>
      </div>

      <div className="flex justify-between text-gray-400">
        <p className="w-[65%]">{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>

      <div className="flex justify-end px-1 text-gray-400">
        <MdOutlineDeliveryDining className="text-2xl text-amber-400 mr-2" />
        <p> {deliveryTime + " mins"}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
