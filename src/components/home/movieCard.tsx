/** @format */

import { Card, CardContent, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { useAppDispatch } from "../../store/hooks";
import { addFavorite, removeFavorite } from "../../store/reducers/auth";
import { useAuth } from "../../hook";
import { useNavigate } from "react-router-dom";

type TProps = {
  Poster?: string;
  Title: string;
  Type: string;
  Year: number;
};
const MovieCard = ({ ...props }: TProps) => {

    const {Poster, Year, Type, Title} = props

    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const {currentUserInfo} = useAuth()
    
    const isFavorite = currentUserInfo?.favorite?.some((item:any)=> item['Title'] === Title)

    const handleFavorite = (props:TProps) => {
      if(currentUserInfo?.email && currentUserInfo?.name) {
        if(isFavorite){
          dispatch(removeFavorite(props.Title))
      }
      else {
          dispatch(addFavorite(props))
      }
      } else {
        navigate('/auth/login')
      }
    }
  return (
    <Card className="w-full max-h-[400px]">
      <div className="relative">
        <img
          src={Poster}
          alt="Card Image"
          width={500}
          height={300}
          className="object-fill object-center w-full h-64 rounded-t-lg"
        />
        <Button
          onClick={() => handleFavorite(props)}
          variant="secondary" 
          size="icon" 
          className="absolute top-0 right-0 m-2 rounded-full bg-secondary-80"
        >
          <Heart fill={isFavorite ? 'red' : 'transparent'} className="h-5 w-5 text-white" />
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">
            {Year}
          </Badge>
          <Badge variant="outline">
            {Type}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold pt-2 line-clamp-3">{Title}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
