import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../customHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MakeAdmin = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //   this function both makes and removes admin role
  const handleMakeAdmin = (id, role, name) => {
    axiosSecure.patch(`/users/admin/${id}?role=${role}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        if (role === "Admin") {
          toast.success(`${name} is Admin Now !`, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        if (role === "user") {
          toast.error(`${name} is removed form admin role !`, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Admin Panel | Make Admin</title>
        <link rel="Make Admin" href="https://www.chipotle.com" />
        <meta name="Admin Panel" value="Make Admin" />
      </Helmet>
      <h3 className="text-2xl font-bold my-4">Make Admin</h3>

      <div className="bg-green-50 w-full h-screen p-5">
        <table className="table-auto w-full bg-white ">
          <thead>
            <tr className="bg-slate-200 px-2 ">
              <th className="text-start p-3">Name</th>
              <th className="text-start p-3">Eamil</th>
              <th className="text-start p-3">Status</th>
              <th className="text-start p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="p-3 font-semibold ">{user.name}</td>
                <td className="p-3 font-semibold ">{user.email}</td>

                <td className="p-3 font-semibold">
                  {user?.role === "Admin" ? (
                    <button
                      onClick={() =>
                        handleMakeAdmin(user._id, "user", user.name)
                      }
                      className="bg-green-500 text-white px-4 py-3 rounded-lg"
                      data-te-toggle="tooltip"
                      title="Admin">
                      {" "}
                      <FontAwesomeIcon icon={faUserShield} />
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleMakeAdmin(user._id, "Admin", user.name)
                      }
                      className="bg-rose-500 text-white px-4 py-3 rounded-lg"
                      data-te-toggle="tooltip"
                      title="Not Admin">
                      {" "}
                      <FontAwesomeIcon icon={faUserShield} />
                    </button>
                  )}
                </td>
                <td className="p-3 font-semibold ">
                  <button className="bg-red-400 text-white px-4 py-3 rounded-lg">
                    {" "}
                    <FontAwesomeIcon icon={faTrashAlt} />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MakeAdmin;
