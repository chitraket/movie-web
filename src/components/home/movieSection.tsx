/** @format */

import MovieCard from "./movieCard";
import MovieCardLoading from "./movieCardLoading";
import NoMovieSection from "./noMovieSection";

type TProps = {
  data: any;
  loading?: boolean;
  noTitle?: string;
  noDescription?: string;
};
const MovieSection = ({ data, loading = false, noTitle, noDescription }: TProps) => {
  return loading ? (
    <MovieCardLoading />
  ) : data.length > 0 ? (
    <div className="flex flex-1 shadow-sm" x-chunk="dashboard-02-chunk-1">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 w-full">
        {data?.map((item:any, index:number) => {
          return <MovieCard {...item} key={item.Title + index} />;
        })}
      </div>
    </div>
  ) : (
    <NoMovieSection title={noTitle} description={noDescription}/>
  );
};

export default MovieSection;
