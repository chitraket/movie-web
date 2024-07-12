
import { MovieHeader, MovieSection } from "../../components/home";
import useHomePage from "./useHomePage";
import { useRef } from "react";

const HomePage = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const { data, nextPage, prevPage, handleSearch, loading } = useHomePage();
  
  return (
    <>
      <MovieHeader searchRef={searchRef} handleSearch={handleSearch} prevPage={prevPage} nextPage={nextPage} loading={loading}/>
      <MovieSection data={data} loading={loading} noTitle="You have no movie" noDescription="No movie or TV shows found."/>
    </>
  );
};

export default HomePage;
