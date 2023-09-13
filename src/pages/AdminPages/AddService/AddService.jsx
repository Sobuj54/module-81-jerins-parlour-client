import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Helmet>
        <title>Admin Panel | Add Service</title>
        <link rel="Add a service" href="https://www.chipotle.com" />
        <meta name="Admin Panel" value="Add a service" />
      </Helmet>
      <h3 className="text-2xl font-bold my-6">Add a Service</h3>
      <section className="py-10 bg-green-50 sm:py-16 lg:py-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto mt-2 sm:mt-5">
            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12 md:p-14  w-full">
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
                          type="text"
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
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default AddService;
