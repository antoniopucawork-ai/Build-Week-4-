import { useCallback, useEffect, useRef, useState } from "react";
import { getMyProfile, getProfileById } from "./strive";

export const useProfile = (id) => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  // Viene incrementato a ogni richiesta: solo la risposta più recente
  // può aggiornare lo stato, così cambiando profilo in fretta non vince
  // la fetch più lenta partita prima.
  const requestId = useRef(0);

  // Se è presente un ID recupero il profilo dell'utente visitato,
  // altrimenti recupero il profilo dell'utente autenticato.
  const fetchProfile = useCallback(async () => {
    const currentRequest = ++requestId.current;
    setLoading(true);
    setError("");

    try {
      const data = id ? await getProfileById(id) : await getMyProfile();

      if (currentRequest === requestId.current) {
        setProfile(data);
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
  }, [id]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProfile();
  }, [fetchProfile]);

  return {
    loading,
    profile,
    error,
    fetchProfile,
  };
};
