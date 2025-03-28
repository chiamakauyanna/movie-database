import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDetailsStore } from "@/store/DetailsStore";
import { useCreditsStore } from "@/store/CreditsStore";
import ItemsDetails from "@/components/common/ItemsDetails";

const TVSeriesDetails = () => {
  const router = useRouter();
  const id = router.query.id;

  const details = useDetailsStore((state) => state.details);
  const getDetails = useDetailsStore((state) => state.getDetails);
  const credits = useCreditsStore((state) => state.credits);
  const getCredits = useCreditsStore((state) => state.getCredits);

  useEffect(() => {
    console.log("Fetching TV details for ID:", id);
    if (!id) return;

    getDetails("tv", Number(id)); 
    getCredits("tv", Number(id)); 
  }, [id, getDetails, getCredits]);

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
