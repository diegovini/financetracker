import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setisPending(true);

    try {
      await projectAuth.signOut();      
      dispatch({ type: "LOGOUT" });

      if(!isCancelled){
        setisPending(false);
        setError(null);
      }
    } catch (error) {
      if(!isCancelled){
        setError(error.message);
        setisPending(false);
        console.log(error);
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  },[]);

  return { logout, error, isPending };
};
