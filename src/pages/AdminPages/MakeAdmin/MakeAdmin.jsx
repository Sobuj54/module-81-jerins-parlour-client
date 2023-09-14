import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../customHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MakeAdmin = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

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
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="p-3 font-semibold ">{user.name}</td>
                <td className="p-3 font-semibold ">{user.email}</td>

                <td className="p-3 font-semibold ">
                  <button>make admin</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
