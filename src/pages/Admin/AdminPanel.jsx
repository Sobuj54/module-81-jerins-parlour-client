import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import {
  faBoxesStacked,
  faHome,
  faPlus,
  faRectangleList,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-b from-green-50 to-green-100 w-2/12 h-screen">
        <div className="w-8/12 mx-auto mt-10">
          <img src={logo} alt="logo" className="bg-cover" />
        </div>

        <div className="my-20 w-8/12 mx-auto">
          <div className="flex flex-col items-start justify-center space-y-6">
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
          </div>
        </div>
      </div>

      <div className="absolute left-60 border-2 w-auto h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
