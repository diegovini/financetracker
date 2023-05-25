import { React, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, query, orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useState(() => {
    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    if (orderBy) {
      //ref = ref.orderBy(...orderBy);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch the data");
      }
    );

    //unsubscribe on unmount

    return () => unsubscribe();
  }, [collection, query]);
  return { documents, error, orderBy };
};
