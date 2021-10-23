import { useState } from "react";
export const useFetch = (call) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetched = async (...args) => {
    try {
      setIsLoading(true);
      await call(...args);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetched, isLoading, error];
};
