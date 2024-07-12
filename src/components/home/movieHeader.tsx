import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type TProps = {
    loading: boolean;
    prevPage: () => void;
    nextPage: () => void;
    searchRef: any;
    handleSearch: (text:string) => void;
}

const MovieHeader = ({searchRef,prevPage,nextPage, loading = false, handleSearch}:TProps) => {
  return <div className="flex flex-row justify-between gap-2">
  <div className="w-full relative">
    <Search
      onClick={() => handleSearch(searchRef.current.value)}
      className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer"
    />
    <Input
      ref={searchRef}
      type="search"
      placeholder="Search movie..."
      className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
    />
  </div>
  <div className="flex flex-row gap-2">
    <Button onClick={prevPage} variant="outline" size="icon" disabled={loading}>
      <ChevronLeft className="h-4 w-4" />
    </Button>
    <Button onClick={nextPage} variant="outline" size="icon" disabled={loading}>
      <ChevronRight className="h-4 w-4" />
    </Button>
  </div>
</div>;
};

export default MovieHeader;
