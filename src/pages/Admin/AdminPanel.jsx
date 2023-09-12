import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import {
  faBoxesStacked,
  faCartShopping,
  faClipboardList,
  faCommentDots,
  faHome,
  faPlus,
  faRectangleList,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const AdminPanel = () => {
  const isAdmin = false;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="hidden lg:block lg:absolute left-0 w-56 top-0 bottom-0">
        <div className="w-8/12 mx-auto mt-10">
          <img src={logo} alt="logo" className="bg-cover" />
        </div>

        <div className="my-20 w-8/12 mx-auto">
          <div className="flex flex-col items-start justify-center space-y-6">
            {isAdmin ? (
              <>
                <NavLink to="/">
                  <FontAwesomeIcon icon={faHome} />
                  <span className="font-semibold ml-2 text-black/75">Home</span>
                </NavLink>
                <NavLink to="/admin/orderList">
                  <FontAwesomeIcon icon={faRectangleList} />
                  <span className="font-semibold ml-2 text-black/75">
                    Order List
                  </span>
                </NavLink>
                <NavLink to="/addService">
                  <FontAwesomeIcon icon={faPlus} />
                  <span className="font-semibold ml-2 text-black/75">
                    Add Service
                  </span>
                </NavLink>
                <NavLink to="/makeAdmin">
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span className="font-semibold ml-2 text-black/75">
                    Make Admin
                  </span>
                </NavLink>
                <NavLink to="/manageServices">
                  <FontAwesomeIcon icon={faBoxesStacked} />
                  <span className="font-semibold ml-2 text-black/75">
                    Manage Services
                  </span>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/">
                  <FontAwesomeIcon icon={faHome} />
                  <span className="font-semibold ml-2 text-black/75">Home</span>
                </NavLink>
                <NavLink to="/admin/book">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="font-semibold ml-2 text-black/75">Book</span>
                </NavLink>
                <NavLink to="/admin/bookingList">
                  <FontAwesomeIcon icon={faClipboardList} />
                  <span className="font-semibold ml-2 text-black/75">
                    Booking List
                  </span>
                </NavLink>
                <NavLink to="/admin/review">
                  <FontAwesomeIcon icon={faCommentDots} />
                  <span className="font-semibold ml-2 text-black/75">
                    Review
                  </span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      {/* this is the hamburger button */}
      <div className="absolute lg:hidden my-6 mr-1 right-0 z-30">
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
      </div>

      {/* for mobile */}
      <div
        className={`absolute z-10 bg-green-200 h-screen w-3/4 sm:w-2/4 md:w-2/6 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? `left-0 top-0 bottom-0` : `-left-3/4`
        }`}>
        <div className="w-8/12 mx-auto mt-10">
          <img src={logo} alt="logo" className="bg-cover" />
        </div>

        <div className="my-20 w-8/12 mx-auto">
          <div className="flex flex-col items-start justify-center space-y-6">
            {isAdmin ? (
              <>
                <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
                  <FontAwesomeIcon icon={faHome} />
                  <span className="font-semibold ml-2 text-black/75">Home</span>
                </NavLink>
                <NavLink
                  to="/admin/orderList"
                  onClick={() => setIsOpen(!isOpen)}>
                  <FontAwesomeIcon icon={faRectangleList} />
                  <span className="font-semibold ml-2 text-black/75">
                    Order List
                  </span>
                </NavLink>
                <NavLink to="/addService" onClick={() => setIsOpen(!isOpen)}>
                  <FontAwesomeIcon icon={faPlus} />
                  <span className="font-semibold ml-2 text-black/75">
                    Add Service
                  </span>
                </NavLink>
                <NavLink to="/makeAdmin" onClick={() => setIsOpen(!isOpen)}>
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span className="font-semibold ml-2 text-black/75">
                    Make Admin
                  </span>
                </NavLink>
                <NavLink
                  to="/manageServices"
                  onClick={() => setIsOpen(!isOpen)}>
                  <FontAwesomeIcon icon={faBoxesStacked} />
                  <span className="font-semibold ml-2 text-black/75">
                    Manage Services
                  </span>
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
                  <FontAwesomeIcon icon={faHome} />
                  <span className="font-semibold ml-2 text-black/75">Home</span>
                </NavLink>
                <NavLink to="/admin/book" onClick={() => setIsOpen(!isOpen)}>
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="font-semibold ml-2 text-black/75">Book</span>
                </NavLink>
                <NavLink
                  to="/admin/bookingList"
                  onClick={() => setIsOpen(!isOpen)}>
                  <FontAwesomeIcon icon={faClipboardList} />
                  <span className="font-semibold ml-2 text-black/75">
                    Booking List
                  </span>
                </NavLink>
                <NavLink to="/admin/review" onClick={() => setIsOpen(!isOpen)}>
                  <FontAwesomeIcon icon={faCommentDots} />
                  <span className="font-semibold ml-2 text-black/75">
                    Review
                  </span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="absolute left-0 lg:left-60 top-0 right-0 bottom-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
