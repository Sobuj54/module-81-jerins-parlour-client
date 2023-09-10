import { Link } from "react-router-dom";

const IndividualBooking = ({ booking }) => {
  const { img, title, description, isPaid } = booking;

  return (
    <div className="border-2 bg-white p-5 rounded-lg">
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center mb-5">
        <img
          src={img}
          alt={title}
          className="w-24 md:w-32 h-24 md:h-32 rounded-full object-cover"
        />
        {isPaid ? (
          <button className="bg-green-200 py-2 px-4 rounded text-green-600">
            Paid
          </button>
        ) : (
          <Link className="bg-rose-200 py-2 px-4 rounded text-rose-600 font-semibold">
            UnPaid
          </Link>
        )}
      </div>
      <h3 className="text-lg md:text-xl font-semibold my-3">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};

export default IndividualBooking;
