import { useEffect, useState } from "react";
import useAuthContext from "../../customHooks/useAuthContext";
import IndividualBooking from "./IndividualBooking";

const BookingList = () => {
  const { user } = useAuthContext();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        setBookings(data);
      });
  }, [user?.email]);

  return (
    <div className="w-full h-full">
      <h2 className="text-2xl font-bold my-6 ml-4">Booking List.</h2>
      <div className="bg-green-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-4 py-10">
          {bookings.map((booking) => (
            <IndividualBooking
              key={booking._id}
              booking={booking}></IndividualBooking>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingList;
