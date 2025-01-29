import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RES_URL } from "../utils/constants"
import MenuCard from "../components/MenuCard"

const MenuPage = () => {
    const {id} = useParams()
    const [menuList, setMenuList] = useState([])

    const fetchMenuData = async () =>{
        const res = await fetch(`${RES_URL}/${id}/menu`)
        const data = await res.json();
        console.log(data);
        setMenuList(data)
        
    }
    useEffect(() =>{
        fetchMenuData()
    },[])
  return (
    <div className="mt-[10rem] min-h-[60rem] mb-10">
        <div className="flex flex-wrap justify-center align-middle gap-10">
            {menuList.map((ele) => <MenuCard key={ele.id} {...ele} /> )}
            
            
        </div>
    </div>
  )
}

export default MenuPage