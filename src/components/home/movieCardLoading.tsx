import React from "react";
import { Skeleton } from "../ui/skeleton";

const MovieCardLoading = () => {
  return <div className="flex flex-1 shadow-sm">
  <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 w-full">
    { Array?.from(Array(10).keys())?.map((_, index)=> <Skeleton key={index} className="w-full h-[350px] rounded-lg " />)}
    </div>
    </div>
  
  
 
};

export default MovieCardLoading;
