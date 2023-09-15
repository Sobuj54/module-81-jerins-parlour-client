import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { Helmet } from "react-helmet-async";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/services?limit=0`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Admin Panel | Manage Service</title>
        <link rel="Manage service" href="https://www.chipotle.com" />
        <meta name="Admin Panel" value="Manage service" />
      </Helmet>
      <h2 className="text-3xl my-4 font-bold">Manage Services</h2>
      <div className="bg-green-50  p-5">
        <table className="table-auto w-full bg-white ">
          <thead>
            <tr className="bg-slate-200 px-2 ">
              <th className="text-start p-3">Image</th>
              <th className="text-start p-3">Service Name</th>
              <th className="text-start p-3">update</th>
              <th className="text-start p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td className="p-3 font-semibold border border-r-0 border-black/50">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-32 rounded-lg"
                  />
                </td>
                <td className="p-3 font-semibold border border-r-0 border-l-0 border-black/50">
                  {service.title}
                </td>
                <td className="p-3 font-semibold border border-r-0 border-l-0 border-black/50">
                  <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="bg-green-500 px-4 py-3 rounded-lg text-white">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <div className="absolute top-16 left-0 right-16 bottom-16">
                    {isModalOpen ? <Modal service={service}></Modal> : <></>}
                  </div>
                </td>
                <td className="p-3 font-semibold border border-l-0  border-black/50">
                  <button className="bg-red-500 px-4 py-3 rounded-lg text-white">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageServices;
