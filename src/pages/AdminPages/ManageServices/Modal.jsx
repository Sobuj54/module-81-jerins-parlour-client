import { useForm } from "react-hook-form";

const Modal = ({ service }) => {
  const { _id, img, price, title, description } = service;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-slate-300 w-full h-auto p-10 rounded-lg">
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
                  {...register("title")}
                  required
                  defaultValue={title}
                  placeholder="Enter Service Title"
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
                  {...register("price")}
                  required
                  placeholder="Enter Service Price"
                  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
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
            </div>

            <div className="sm:col-span-2">
              <label className="text-base font-medium text-gray-900">
                {" "}
                Description{" "}
              </label>
              <div className="mt-2.5 relative">
                <textarea
                  {...register("description")}
                  required
                  placeholder="Write Service Description"
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
    </div>
  );
};

export default Modal;
