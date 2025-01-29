import { IoMdHome } from "react-icons/io";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HeaderComp = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <div className="w-full fixed top-0 left-0 z-30 flex justify-between items-center bg-slate-950 ">
        {/* ye logo hai */}
        <div>
          <img src={logo} className="h-16 md:h-22 pl-2 md:pl-10" alt="" />
        </div>

        {/* ye beech wale button */}
        <div className="sm:flex hidden gap-10 text-2xl text-gray-600  font-bold">
          <p className="hover:text-orange-600 cursor-pointer" onClick={() => navigate("/")}>Home</p>
          <p className="hover:text-orange-600 cursor-pointer" onClick={() => navigate("/reviews")}>Reviews</p>
          <p className="hover:text-orange-600 cursor-pointer" onClick={() => navigate("/cart")}>Cart</p>
        </div>

        {/*  ye small screen wale button */}
        <div className="flex sm:hidden justify-center b items-center sm:gap-10 text-gray-200 gap-8 text-xl">
          <IoMdHome
            className="hover:text-orange-600 cursor-pointer"
            style={{ fontSize: "30px" }}
            onClick={() => navigate("/")}
          />
          <MdReviews className="hover:text-orange-600 cursor-pointer" onClick={() => navigate("/reviews")} />
          <FaShoppingCart className="hover:text-orange-600 cursor-pointer" onClick={() => navigate("/cart")} />
        </div>

        {/* ye right side wale, chote screen ke liye hamburger niche hai */}
        <div className="items-center hidden md:flex">
          <div className="flex flex-col items-center gap-1">
            <div>
              <FaUserCircle
                className="cursor-pointer text-gray-200 hover:text-gray-600"
                style={{ fontSize: "40px" }}
              />
            </div>
            <p className="cursor-pointer hidden xl:flex text-white px-2 rounded-md font-bold">
              Welcome guest user
            </p>
          </div>
          <button
            className="bg-blue-400 hover:bg-blue-600 transition-all duration-300 text-white font-sm md:font-bold ml-2 mr-2 md:mr-6 p-2 rounded-lg cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login/Signup
          </button>
        </div>

        {/* right side wala hamburger for smol screen */}
        <div className=" md:hidden">
          <FaBars
            className="text-gray-200 cursor-pointer mr-2 "
            style={{ fontSize: "28px" }}
            onClick={toggleMenu}
          />

          <div
            className={`${menuOpen ? "block" : "hidden"
              } absolute top-14 right-4 bg-gray-800 p-4 rounded-lg md:flex md:static md:bg-transparent md:p-0`}
          >
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <FaUserCircle
                  className="cursor-pointer text-gray-200 hover:text-gray-600"
                  style={{ fontSize: "40px" }}
                />
                <p className="cursor-pointer hidden xl:flex text-white px-2 rounded-md font-bold">
                  Welcome guest user
                </p>
              </div>
              <button className="bg-blue-400 hover:bg-blue-600 transition-all duration-300 text-white font-sm md:font-bold ml-2 mr-2 md:mr-6 p-2 rounded-lg cursor-pointer" onClick={() => navigate("/login")}>
                Login/Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComp;
