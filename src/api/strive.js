const ENDPOINT = "https://striveschool-api.herokuapp.com/api"
const API_KEY = import.meta.env.VITE_API_KEY // sarebbe la API_KEY (Token)

export const authHeaders = {
  Authorization: `Bearer ${API_KEY}`,
}

export const getMyProfile = async () => {
  if (!API_KEY)
    throw new Error("VITE_API_KEY is missing: copy .env.example to .env and set your token")
  const res = await fetch(`${ENDPOINT}/profile/me`, { 
    headers: authHeaders 
  })
  if (!res.ok) 
    throw new Error(`Profile request failed: ${res.status}`)
  return res.json()
}

export const getProfiles = async () => {
  if (!API_KEY)
    throw new Error("VITE_API_KEY is missing");

  const res = await fetch(`${ENDPOINT}/profile/`, {
    headers: authHeaders,
  });

  if (!res.ok)
    throw new Error(`Profiles request failed: ${res.status}`);

  return res.json();
};

// Effettua una fetch per recuperare il profilo dell'utente corrispondente all'ID ricevuto.
// Viene utilizzato quando si visita il profilo di un altro utente.
export const getProfileById = async (id) => {
  if (!API_KEY)
    throw new Error("VITE_API_KEY is missing");

  const res = await fetch(`${ENDPOINT}/profile/${id}`, {
    headers: authHeaders,
  });

  if (!res.ok)
    throw new Error(`Profile request failed: ${res.status}`);

  return res.json();
};
