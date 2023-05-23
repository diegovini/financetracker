import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { Navigate } from "react-router-dom";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email,password) => {
    setError(null);
    setisPending(true);

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email,password);      
      dispatch({ type: "LOGIN", payload: res.user });

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

  return { login, error, isPending };
};
