import { useEffect, useState } from "react";
import { getMyProfile } from "./strive";

export const useProfile = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    setLoading(true);

    try {
      const data = await getMyProfile();

console.log("PROFILO API:", data);

      setProfile(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProfile();
  }, []);

  return {
    loading,
    profile,
    error,
    fetchProfile,
  };
};