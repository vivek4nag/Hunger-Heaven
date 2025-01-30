import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { RES_URL } from "../utils/constants"

const HomePage = () => {
  const [restaurantList, setRestaurantList] = useState([])

  const fetchResCard = async () => {
      const res = await fetch(RES_URL);
      const data = await res.json();
      console.log(data);
      setRestaurantList(data);
      
  }

  useEffect(() => {
    fetchResCard()
  },[])

  return (
    <div className="min-h-[60rem] mt-24">
      <div>
        <h4 className="text-red-600">Banner section</h4>
      </div>
      <div className="py-20 flex flex-wrap gap-6 px-10 justify-center align-middle">
        {restaurantList && restaurantList.map((ele) =>  <RestaurantCard key={ele.id} {...ele} />)}
        
      </div>
        
    </div>
  )
}

export default HomePage