import ItemsDetails from "@/components/common/ItemsDetails";
import { useCreditsStore } from "@/store/CreditsStore";
import { useDetailsStore } from "@/store/DetailsStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MovieDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const type = router.query.type;

  const details = useDetailsStore((state) => state.details);
  const getDetails = useDetailsStore((state) => state.getDetails ?? (() => {}));
  const credits = useCreditsStore((state) => state.credits);
  const getCredits = useCreditsStore((state) => state.getCredits ?? (() => {}));

  useEffect(() => {
    if (!id) return;
      getDetails("movie", Number(id));
       getCredits("movie", Number(id));
  }, [id, getDetails, getCredits]);

  return (
    <section>
      <ItemsDetails 
       {...details}
       {...credits}
      />
    </section>
  );
};

export default MovieDetails;

//  Disable the global layout for this page
MovieDetails.getLayout = function getLayout(page: React.ReactNode) {
  return <>{page}</>; 
};

