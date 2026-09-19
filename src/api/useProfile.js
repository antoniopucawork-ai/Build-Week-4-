import { useEffect, useState } from "react";
import { getMyProfile, getProfileById } from "./strive";

export const useProfile = (id) => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    setLoading(true);

    {/* Se è presente un ID recupero il profilo dell'utente visitato,
    altrimenti recupero il profilo dell'utente autenticato. */}
    try {
       const data = id
        ? await getProfileById(id)
        : await getMyProfile();

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
  }, [id]);

  return {
    loading,
    profile,
    error,
    fetchProfile,
  };
};