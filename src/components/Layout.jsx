import { Outlet } from "react-router-dom"
import HeaderComp from "./HeaderComp"
import FooterComp from "./FooterComp"

const Layout = () => {
  return (
    <div>
        <HeaderComp/>
        <Outlet/>
        <FooterComp/>
    </div>
  )
}

export default Layout