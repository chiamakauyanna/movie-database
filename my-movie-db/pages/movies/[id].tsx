import ItemsDetails from "@/components/common/ItemsDetails";
import useDetails from "@/hooks/useDetails";

const MovieDetails = () => {
  const { details, credits } = useDetails("movie");

  return (
    <section>
      <ItemsDetails {...details} {...credits} />
    </section>
  );
};

export default MovieDetails;


//  Disable the global layout for this page
MovieDetails.getLayout = function getLayout(page: React.ReactNode) {
  return <>{page}</>;
};
