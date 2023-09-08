import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";

const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export default useAuthContext;
