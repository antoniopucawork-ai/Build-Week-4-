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

// Recupera la lista di esperienze di uno specifico utente.
export const getExperiences = async (userId) => {
  if (!API_KEY)
    throw new Error("VITE_API_KEY is missing");

  const res = await fetch(`${ENDPOINT}/profile/${userId}/experiences`, {
    headers: authHeaders,
  });

  if (!res.ok)
    throw new Error(`Experiences request failed: ${res.status}`);

  return res.json();
};

// Crea una nuova esperienza per l'utente autenticato.
export const createExperience = async (userId, experienceData) => {
  if (!API_KEY)
    throw new Error("VITE_API_KEY is missing");

  const res = await fetch(`${ENDPOINT}/profile/${userId}/experiences`, {
    method: "POST",
    headers: {
      ...authHeaders,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(experienceData),
  });

  if (!res.ok)
    throw new Error(`Create experience failed: ${res.status}`);

  return res.json();
};

// Modifica una specifica esperienza.
export const updateExperience = async (userId, expId, experienceData) => {
  if (!API_KEY)
    throw new Error("VITE_API_KEY is missing");

  const res = await fetch(`${ENDPOINT}/profile/${userId}/experiences/${expId}`, {
    method: "PUT",
    headers: {
      ...authHeaders,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(experienceData),
  });

  if (!res.ok)
    throw new Error(`Update experience failed: ${res.status}`);

  return res.json();
};

// Elimina una specifica esperienza.
export const deleteExperience = async (userId, expId) => {
  if (!API_KEY)
    throw new Error("VITE_API_KEY is missing");

  const res = await fetch(`${ENDPOINT}/profile/${userId}/experiences/${expId}`, {
    method: "DELETE",
    headers: authHeaders,
  });

  if (!res.ok)
    throw new Error(`Delete experience failed: ${res.status}`);

  const text = await res.text();

  return text;
};