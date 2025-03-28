import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDetailsStore } from "@/store/DetailsStore";
import { useCreditsStore } from "@/store/CreditsStore";

const useDetails = (type: "movie" | "tv") => {
  const router = useRouter();
  const id = router.query.id;

  const details = useDetailsStore((state) => state.details);
  const getDetails = useDetailsStore((state) => state.getDetails);
  const credits = useCreditsStore((state) => state.credits);
  const getCredits = useCreditsStore((state) => state.getCredits);

  useEffect(() => {
    if (!id) return;
    getDetails(type, Number(id));
    getCredits(type, Number(id));
  }, [id, type, getDetails, getCredits]);

  return {
    details,
    credits,
  };
};

export default useDetails;
