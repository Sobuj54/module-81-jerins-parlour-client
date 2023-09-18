import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "./Modal";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const ManageServices = () => {
  // const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState(null);

  // useEffect(() => {
  //   fetch(`https://jerins-parlour-server-three.vercel.app/services?limit=0`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setServices(data);
  //     });
  // }, []);

  const { data: services = [], refetch } = useQuery({
    queryKey: ["allServices"],
    queryFn: async () => {
      const res = await axios.get(
        `https://jerins-parlour-server-three.vercel.app/services?limit=0`
      );
      return res.data;
    },
  });

  const handleModalOpen = (id) => {
    setIsModalOpen(!isModalOpen);
    setModalId(id);
  };

  // delete a service
  const handleDeleteService = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://jerins-parlour-server-three.vercel.app/services/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              toast.success("Successfully deleted the service !", {
                position: toast.POSITION.TOP_CENTER,
              });
            } else {
              toast.error("Couldn't delete the Service !", {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          });
      }
    });
  };

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
                    onClick={() => handleModalOpen(service._id)}
                    className="bg-green-500 px-2 sm:px-4 py-1 sm:py-3 rounded-lg text-white">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                </td>
                <td className="p-3 font-semibold border border-l-0  border-black/50">
                  <button
                    onClick={() => handleDeleteService(service._id)}
                    className="bg-red-500 px-2 sm:px-4 py-1 sm:py-3 rounded-lg text-white">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {isModalOpen ? (
          <div className="fixed top-2 md:top-20 left-6 md:left-20 right-6 md:right-20 bottom-0 md:bottom-16">
            <Modal
              id={modalId}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}></Modal>
          </div>
        ) : (
          <></>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageServices;
