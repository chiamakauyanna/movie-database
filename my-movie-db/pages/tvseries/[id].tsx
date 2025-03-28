import ItemsDetails from "@/components/common/ItemsDetails";
import useDetails from "@/hooks/useDetails";

const TVSeriesDetails = () => {
  const { details, credits } = useDetails("tv");

  return (
    <section>
      <ItemsDetails {...details} {...credits} />
    </section>
  );
};

export default TVSeriesDetails;


//  Disable the global layout for this page
TVSeriesDetails.getLayout = function getLayout(page: React.ReactNode) {
  return <>{page}</>;
};
