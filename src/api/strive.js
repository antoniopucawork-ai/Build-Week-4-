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
