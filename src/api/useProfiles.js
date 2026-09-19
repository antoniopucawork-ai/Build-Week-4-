import { useCallback, useEffect, useRef, useState } from "react";
import { getProfiles } from "./strive";

export const useProfiles = () => {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState("");

  // Come in useProfile: solo la risposta più recente aggiorna lo stato.
  const requestId = useRef(0);

  const fetchProfiles = useCallback(async () => {
    const currentRequest = ++requestId.current;
    setLoading(true);
    setError("");

    try {
      const data = await getProfiles();

      if (currentRequest === requestId.current) {
        // L'API deve restituire un array: se così non fosse evito
        // che un .slice() su un valore non valido rompa la pagina.
        setProfiles(Array.isArray(data) ? data : []);
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
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProfiles();
  }, [fetchProfiles]);

  return {
    loading,
    profiles,
    error,
    fetchProfiles,
  };
};
