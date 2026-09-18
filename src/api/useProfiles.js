import { useEffect, useState } from "react";
import { getProfiles } from "./strive";

export const useProfiles = () => {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState("");

  const fetchProfiles = async () => {
    setLoading(true);

    try {
      const data = await getProfiles();

      console.log("PROFILI API:", data);

      setProfiles(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProfiles();
  }, []);

  return {
    loading,
    profiles,
    error,
    fetchProfiles,
  };
};