
import { useEffect, useState } from "react";
import axios from "axios";
import { instance } from "../api";
import toast from "react-hot-toast";

const useAxios = () => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    return () => {
      source.cancel("Component unmounted: Request cancelled.");
    };
  }, []);

  const fetchData = async ({ url, method, data = {}, params = {} }) => {
    setLoading(true);
    setResponse(null)
    try {
      const result = await instance({
        url,
        method,
        data: method.toLowerCase() === "get" ? undefined : data,
        params: method.toLowerCase() === "get" ? params : undefined,
        cancelToken: axios.CancelToken.source().token,
      });
      setResponse(result);
    } catch (error) {
      if (axios?.isCancel(error)) {
        console.error("Request cancelled", error.message);
      }
      toast.error('Please try again later !!')     
      setError(error?.response ? error?.response?.data : error?.message);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData };
};

export default useAxios;
