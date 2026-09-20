import { useCallback, useEffect, useRef, useState } from "react";
import { getExperiences } from "./strive";

export const useExperiences = (userId) => {
  const [loading, setLoading] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [error, setError] = useState("");

  const requestId = useRef(0);

  const fetchExperiences = useCallback(async () => {
    if (!userId) {
      setExperiences([]);
      return;
    }

    const currentRequest = ++requestId.current;
    setLoading(true);
    setError("");

    try {
      const data = await getExperiences(userId);

      if (currentRequest === requestId.current) {
        setExperiences(Array.isArray(data) ? data : []);
      }
    } catch (e) {
      if (currentRequest === requestId.current) {
        setError(e.message);
      }
    } finally {
      if (currentRequest === requestId.current) {
        setLoading(false);
      }
    }
  }, [userId]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchExperiences();
  }, [fetchExperiences]);

  return {
    loading,
    experiences,
    error,
    fetchExperiences,
  };
};
