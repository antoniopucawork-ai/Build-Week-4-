import { useEffect, useState } from "react";
import { getExperiences } from "./strive";

export const useExperiences = (userId) => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchExperiences = async () => {
    if (!userId) return;

    setLoading(true);
    setError("");

    try {
      const data = await getExperiences(userId);

      console.log("ESPERIENZE API:", data);

      setExperiences(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, [userId]);

  return {
    experiences,
    loading,
    error,
    fetchExperiences,
  };
};