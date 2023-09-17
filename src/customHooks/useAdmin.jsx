import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, axiosLoading } = useAuthContext();
  const [axiosSecure] = useAxiosSecure();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],

    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      //   console.log(res.data);
      return res.data;
    },
    enabled: !axiosLoading,
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
