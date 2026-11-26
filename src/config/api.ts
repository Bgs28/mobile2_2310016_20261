// Ganti alamat IP dengan IPv4 laptop
// export const API_BASE_URL = "http://localhost:8000/api/";
// export const API_BASE_URL = "http://192.168.72.112:8000/api"; // hotspot HP
export const API_BASE_URL = "https://laravel-2310016-20261.wasmer.app/api"; //deploy
// export const API_BASE_URL = "http://192.168.1.68:8000/api"; //Labor jayanusa
// export const API_BASE_URL = "http://192.168.100.46:8000/api"; // random wifi

export const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, "");

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/login`,
  REGISTER: `${API_BASE_URL}/register`,
  PROFILE: `${API_BASE_URL}/profile`,
  UPDATE_PROFILE: `${API_BASE_URL}/profile`,
  UPDATE_PASSWORD: `${API_BASE_URL}/profile/password`,
  UPDATE_PHOTO: `${API_BASE_URL}/profile/photo`,

  LOGOUT: `${API_BASE_URL}/logout`,
};

export function getStorageImageUrl(path?: string | null): string | null {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${API_ORIGIN}/storage/${path.replace(/^\+/, "")}`;
}
