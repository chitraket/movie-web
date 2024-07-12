import { useAuth } from "../../hook";
import { MovieSection } from "../../components/home";

const FavoritePage = () => {

    const { currentUserInfo } = useAuth();

  return <MovieSection data={currentUserInfo?.favorite} noTitle="You have no favorite" noDescription="No favorite movie found."/>;
};

export default FavoritePage;
