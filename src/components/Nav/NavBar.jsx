import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import { useState } from "react";
import useAuthContext from "../../customHooks/useAuthContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logOut } = useAuthContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log("sign out successfull");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  const isAdmin = true;

  return (
    <header className="bg-gradient-to-b from-green-50 to-green-100">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex">
              <img className="w-auto h-10" src={logo} alt="" />
            </Link>
          </div>

          {/* this is the hamburger button */}
          {isOpen ? (
            // this svg is hamburger icon
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
              <svg
                className=" w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          ) : (
            // this svg is cross icon
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          {/* visible menu for large devices */}
          <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <NavLink
              to="/"
              className={`text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80 ${({
                isActive,
              }) => (isActive ? "active" : "")}`}>
              {" "}
              Home{" "}
            </NavLink>

            <NavLink
              to="/services"
              className={`text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80 ${({
                isActive,
              }) => (isActive ? "active" : "")}`}>
              {" "}
              Services{" "}
            </NavLink>

            <NavLink
              to="/team"
              title=""
              className={`text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80 ${({
                isActive,
              }) => (isActive ? "active" : "")}`}>
              {" "}
              Our Team{" "}
            </NavLink>

            {isAdmin ? (
              <NavLink
                to="/admin/orderList"
                className={`text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80 ${({
                  isActive,
                }) => (isActive ? "active" : "")}`}>
                {" "}
                Admin panel{" "}
              </NavLink>
            ) : (
              <NavLink
                to="/admin/bookingList"
                className={`text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80 ${({
                  isActive,
                }) => (isActive ? "active" : "")}`}>
                {" "}
                Customer panel{" "}
              </NavLink>
            )}

            <div className="w-px h-5 bg-black/20"></div>

            {user ? (
              <Link
                onClick={handleLogOut}
                className={`inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white "
              role="button`}>
                {" "}
                Log out{" "}
              </Link>
            ) : (
              <Link
                to="/login"
                className={`inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white "
            role="button`}>
                {" "}
                Log in{" "}
              </Link>
            )}
          </div>

          {/* for mobile devices this will work*/}
          <div
            className={`lg:hidden z-30 absolute ml-auto flex flex-col gap-3 items-center text-start justify-center transition-all duration-500 ease-in-out bg-gradient-to-b from-green-200 to-green-300 w-5/6 md:w-2/3 p-10 md:p-14 rounded-xl ${
              isOpen
                ? `top-1/4 md:top-1/3 left-1/2 -translate-x-1/2  `
                : `-top-2/3 left-1/2 -translate-x-1/2 `
            }`}>
            <NavLink
              to="/"
              onClick={() => setIsOpen(!isOpen)}
              className={`text-base text-center font-semibold text-black transition-all duration-200 hover:text-opacity-80 ${({
                isActive,
              }) => (isActive ? "active" : "")}`}>
              {" "}
              Home{" "}
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setIsOpen(!isOpen)}
              className={`text-base text-center font-semibold text-black transition-all duration-200 hover:text-opacity-80 ${({
                isActive,
              }) => (isActive ? "active" : "")}`}>
              {" "}
              Services{" "}
            </NavLink>

            <NavLink
              to="/team"
              onClick={() => setIsOpen(!isOpen)}
              title=""
              className={`text-base text-center font-semibold text-black transition-all duration-200 hover:text-opacity-80 ${({
                isActive,
              }) => (isActive ? "active" : "")}`}>
              {" "}
              Our Team{" "}
            </NavLink>

            {isAdmin ? (
              <NavLink
                to="/admin/orderList"
                onClick={() => setIsOpen(!isOpen)}
                className={`text-base text-center font-semibold text-black transition-all duration-200 hover:text-opacity-80 ${({
                  isActive,
                }) => (isActive ? "active" : "")}`}>
                {" "}
                Admin panel{" "}
              </NavLink>
            ) : (
              <NavLink
                to="/admin/bookingList"
                onClick={() => setIsOpen(!isOpen)}
                className={`text-base text-center font-semibold text-black transition-all duration-200 hover:text-opacity-80 ${({
                  isActive,
                }) => (isActive ? "active" : "")}`}>
                {" "}
                Customer panel{" "}
              </NavLink>
            )}

            <div className="w-4/5 h-px bg-black/20"></div>

            {user ? (
              <Link
                onClick={handleLogOut}
                className={`inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white "
              role="button`}>
                {" "}
                Log out{" "}
              </Link>
            ) : (
              <Link
                to="/login"
                className={`inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white "
            role="button`}>
                {" "}
                Log in{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
