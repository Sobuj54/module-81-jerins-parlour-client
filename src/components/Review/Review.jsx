import { useForm } from "react-hook-form";
import useAuthContext from "../../customHooks/useAuthContext";
import useAxiosSecure from "../../customHooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Review = () => {
  const { user } = useAuthContext();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { photo, name, profession, description, rating } = data;

    axiosSecure
      .post(`/reviews`, {
        img: photo,
        name: name,
        profession: profession,
        comment: description,
        rating: parseInt(rating),
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Review submission successful !", {
            position: toast.POSITION.TOP_CENTER,
          });
          reset();
        } else {
          toast.error("Something went wrong !", {
            position: toast.POSITION.TOP_LEFT,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Helmet>
        <title>Customer Panel | Review</title>
        <link rel="Review" href="https://www.chipotle.com" />
        <meta name="Customer Panel" value="Review" />
      </Helmet>
      <h3 className="text-2xl font-bold my-6">Review</h3>
      <section className="py-10 bg-green-50 sm:py-16 lg:py-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto mt-2 sm:mt-5">
            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12 md:p-14  w-full">
                <h3 className="text-3xl font-semibold capitalize text-center text-gray-900">
                  Tell us about your experience
                </h3>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-14 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Your name{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          {...register("name")}
                          required
                          defaultValue={user?.displayName}
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Profession{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          {...register("profession")}
                          required
                          placeholder="Enter your profession"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Photo URL{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="url"
                          {...register("photo")}
                          required
                          defaultValue={user?.photoURL}
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Rating{" "}
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="number"
                          {...register("rating")}
                          required
                          min="1"
                          max="5"
                          placeholder="Give rating 1 to 5"
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
                          placeholder="Description"
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

export default Review;
