import ItemsDetails from "@/components/common/ItemsDetails";
import Loader from "@/components/common/Loader";
import useDetails from "@/hooks/useDetails";

const MovieDetails = () => {
  const { details, credits, loading, error,   } = useDetails("movie");

  return (
    <section>
      {loading && <Loader />}

      {error && <p className="text-red-500 text-center mt-12">{error}</p>}

      {!loading && !error && <ItemsDetails {...details} {...credits} />}
    </section>
  );
};

export default MovieDetails;

//  Disable the global layout for this page
MovieDetails.getLayout = function getLayout(page: React.ReactNode) {
  return <>{page}</>;
};
