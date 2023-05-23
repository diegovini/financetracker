import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setisPending(true);

    try {
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });
      setisPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setisPending(false);
      console.log(error);
    }
  };
  return { logout, error, isPending };
};
