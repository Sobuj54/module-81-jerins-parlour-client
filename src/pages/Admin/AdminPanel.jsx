import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import {
  faBoxesStacked,
  faHome,
  faPlus,
  faRectangleList,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="relative">
      <div className="absolute bg-gradient-to-b from-green-50 to-green-100 w-2/12 h-screen">
        <div className="w-8/12 mx-auto mt-10">
          <img src={logo} alt="logo" className="bg-cover" />
        </div>

        <div className="my-20 w-8/12 mx-auto">
          <div className="flex flex-col items-start justify-center space-y-6">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              <span className="font-semibold ml-2 text-black/75">Home</span>
            </Link>
            <Link to="/orderList">
              <FontAwesomeIcon icon={faRectangleList} />
              <span className="font-semibold ml-2 text-black/75">
                Order List
              </span>
            </Link>
            <Link to="/addService">
              <FontAwesomeIcon icon={faPlus} />
              <span className="font-semibold ml-2 text-black/75">
                Add Service
              </span>
            </Link>
            <Link to="/makeAdmin">
              <FontAwesomeIcon icon={faUserPlus} />
              <span className="font-semibold ml-2 text-black/75">
                Make Admin
              </span>
            </Link>
            <Link to="/manageServices">
              <FontAwesomeIcon icon={faBoxesStacked} />
              <span className="font-semibold ml-2 text-black/75">
                Manage Services
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
