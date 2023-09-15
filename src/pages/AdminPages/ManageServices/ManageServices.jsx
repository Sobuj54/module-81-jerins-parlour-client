import { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services?limit=0`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl my-4 text-bold">Manage Services</h2>
      <div className="bg-green-50  p-5">
        <table className="table-auto w-full bg-white ">
          <thead>
            <tr className="bg-slate-200 px-2 ">
              <th className="text-start p-3">img</th>
              <th className="text-start p-3">Name</th>
              <th className="text-start p-3">update</th>
              <th className="text-start p-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td className="p-3 font-semibold border border-r-0 border-black/50">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-32 rounded-lg"
                  />
                </td>
                <td className="p-3 font-semibold border border-r-0 border-l-0 border-black/50">
                  {service.title}
                </td>
                <td className="p-3 font-semibold border border-r-0 border-l-0 border-black/50">
                  update
                </td>
                <td className="p-3 font-semibold border border-l-0  border-black/50">
                  delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageServices;
