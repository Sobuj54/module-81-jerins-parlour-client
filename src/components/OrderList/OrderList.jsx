import { useEffect, useState } from "react";
import useAxiosSecure from "../../customHooks/useAxiosSecure";

const OrderList = () => {
  const [axiosSecure] = useAxiosSecure();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axiosSecure.get("/bookings").then((res) => {
      setBookings(res.data);
    });
  }, [axiosSecure]);

  return (
    <div>
      <h2 className="text-3xl font-bold my-4">Order List</h2>
      <div className="bg-green-50  p-5">
        <table className="table-auto w-full bg-white ">
          <thead>
            <tr className="bg-slate-200 px-2 ">
              <th className="text-start p-3">Name</th>
              <th className="text-start p-3">Eamil</th>
              <th className="text-start p-3">Service</th>
              <th className="text-start p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td className="p-3 font-semibold border border-r-0 border-black/50">
                  {booking.userName}
                </td>
                <td className="p-3 font-semibold border border-r-0 border-l-0 border-black/50">
                  {booking.email}
                </td>
                <td className="p-3 font-semibold border border-r-0 border-l-0 border-black/50">
                  {booking.title}
                </td>
                <td className="p-3 font-semibold border border-l-0  border-black/50">
                  {booking.isPaid ? (
                    <span className="text-green-400">Paid</span>
                  ) : (
                    <span className="text-red-500">Unpaid</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
