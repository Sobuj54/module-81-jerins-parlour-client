import { Link } from "react-router-dom";

const IndividualBooking = ({ booking }) => {
  const { img, title, description, isPaid } = booking;

  return (
    <div className="border-2 bg-white p-5 rounded-lg">
      <div className="flex justify-between items-center mb-5">
        <img
          src={img}
          alt={title}
          className="w-32 h-32 rounded-full object-cover"
        />
        {isPaid ? (
          <button className="bg-green-200 p-3 rounded text-green-600">
            Paid
          </button>
        ) : (
          <Link className="bg-rose-200 p-3 rounded text-rose-600 font-semibold">
            UnPaid
          </Link>
        )}
      </div>
      <h3 className="text-xl font-semibold my-3">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default IndividualBooking;
