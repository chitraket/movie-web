
type TProps = {
    title?: string;
    description?: string;
}
const NoMovieSection = ({title,description}:TProps) => {
  return <div className="flex flex-1 items-center justify-center rounded-lg">
  <div className="flex flex-col items-center gap-1 text-center">
   {title ? <h3 className="text-2xl font-bold tracking-tight">
      {title}
    </h3> : null}
    {description ?
    <p className="text-sm text-muted-foreground">
      {description}
    </p> : null}
  </div>
</div>;
};

export default NoMovieSection;
