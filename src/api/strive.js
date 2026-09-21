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
  return res.json();
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

// Qui stiamo caricando le esperienze
export const getExperiences = async (userId) => {
  if (!API_KEY) {
    throw new Error("VITE_API_KEY is missing");
  }

  const url = `${ENDPOINT}/profile/${userId}/experiences`;

  console.log("URL ESPERIENZE:", url);
  console.log("TOKEN PRESENTE:", !!API_KEY);

  const res = await fetch(url, {
    headers: authHeaders,
  });

  console.log("STATUS ESPERIENZE:", res.status);

  if (!res.ok) {
    throw new Error(`Experiences request failed: ${res.status}`);
  }

  return res.json();
};

export const createExperience = async (userId, experience) => {
  if (!API_KEY) {
    throw new Error("VITE_API_KEY is missing");
  }

  const res = await fetch(
    `${ENDPOINT}/profile/${userId}/experiences`,
    {
      method: "POST",
      headers: {
        ...authHeaders,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experience),
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Create experience failed: ${res.status} - ${errorText}`
    );
  }

  return res.json();
};

export const updateExperience = async (userId, experienceId, experience) => {
  if (!API_KEY) {
    throw new Error("VITE_API_KEY is missing");
  }

  const res = await fetch(
    `${ENDPOINT}/profile/${userId}/experiences/${experienceId}`,
    {
      method: "PUT",
      headers: {
        ...authHeaders,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experience),
    }
  );

  if (!res.ok) {
    const errorText = await res.text();

    throw new Error(
      `Update experience failed: ${res.status} - ${errorText}`
    );
  }

  return res.json();
};

export const deleteExperience = async (userId, experienceId) => {
  if (!API_KEY) {
    throw new Error("VITE_API_KEY is missing");
  }

  const res = await fetch(
    `${ENDPOINT}/profile/${userId}/experiences/${experienceId}`,
    {
      method: "DELETE",
      headers: authHeaders,
    }
  );

  if (!res.ok) {
    const errorText = await res.text();

    throw new Error(
      `Delete experience failed: ${res.status} - ${errorText}`
    );
  }

  return true;
};