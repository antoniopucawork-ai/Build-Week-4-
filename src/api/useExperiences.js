import { useCallback, useEffect, useState } from "react";
import { getExperiences } from "./strive";

export const useExperiences = (userId) => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchExperiences = useCallback(async () => {
    if (!userId) {
      setExperiences([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await getExperiences(userId);

      setExperiences(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchExperiences();
  }, [fetchExperiences]);

  return {
    experiences,
    loading,
    error,
    fetchExperiences,
  };
};
