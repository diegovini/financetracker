import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("Use auth context must be inside an AuthContextProvider");
  }

  return context;
};
