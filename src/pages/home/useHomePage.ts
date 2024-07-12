import { useEffect, useState } from "react";
import { useAxios } from "../../hook";
import { config } from "../../api";

const useHomePage = () => {
  const { response, fetchData, loading } = useAxios();
  
  const totalPage = Math.round(Number(response?.totalResults) / 10)
  const [state, setState] = useState({
    page:1,
    data:[],
    search:'marvel',
  })
  const updateState = (newState: object) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }))
  }
  const nextPage = async() => {
    if(totalPage > state.page){
      updateState({
        page:state.page + 1
      })
      await handleApiCall(state.page + 1,state.search)
    }
  }
  const prevPage = async() => {
    if(state?.page > 1){
      updateState({
        page:state.page - 1
      })
    await handleApiCall(state.page - 1,state.search)
    }
  }
  const handleApiCall = async (page:number,search:string) => {
    await fetchData({
      url: config.BASE_URL,
      method: "GET",
      params: {
        apikey:config.API_KEY,
        s: search,
        page: page,
      },
    });
  };
  const handleSearch = async(search:string) => {
    if(search){
      await handleApiCall(1,search)
      updateState({
        page:1,
        search,
      })
    }
  }
  useEffect(() => {
    handleApiCall(state?.page,state?.search);
  }, []);

  return {
    data: response?.Search || [],
    handleSearch,
    nextPage,
    prevPage,
    page:state.page,
    loading
  }
};

export default useHomePage;
