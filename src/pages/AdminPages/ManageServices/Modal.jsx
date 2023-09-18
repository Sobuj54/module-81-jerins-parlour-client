import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../../customHooks/useAxiosSecure";
import { useEffect, useState } from "react";

const Modal = ({ id, setIsModalOpen, isModalOpen }) => {
  const [service, setService] = useState([]);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/services/${id}`).then((res) => {
      setService(res.data);
    });
  }, [axiosSecure, id]);

  const { title, price, description } = service;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const { title, price, description } = data;

    axios
      .patch(`https://jerins-parlour-server-three.vercel.app/services/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Update Successful !", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error("Couldn't update the Service !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };

  return (
    <div className="bg-slate-300 relative w-full h-auto p-10 rounded-lg">
      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="absolute top-0 right-0 w-8 h-8 text-white bg-red-500 rounded-full">
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
      <h2 className="text-2xl font-semibold text-center mb-10">
        Update <span className="text-emerald-600">{title}</span>{" "}
      </h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
            <div>
              <label className="text-base font-medium text-gray-900">
                {" "}
                Service Title{" "}
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="text"
                  required
                  defaultValue={title}
                  {...register("title")}
                  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="text-base font-medium text-gray-900">
                {" "}
                Price{" "}
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="number"
                  required
                  defaultValue={price}
                  {...register("price")}
                  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-2">
              <label className="text-base font-medium text-gray-900">
                {" "}
                Image{" "}
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="file"
                  {...register("img")}
                  required
                  placeholder="Enter your full name"
                  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>
            </div> */}

            <div className="sm:col-span-2">
              <label className="text-base font-medium text-gray-900">
                {" "}
                Description{" "}
              </label>
              <div className="mt-2.5 relative">
                <textarea
                  required
                  defaultValue={description}
                  {...register("description")}
                  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                  rows="4"></textarea>
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Modal;
