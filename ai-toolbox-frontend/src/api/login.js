import axios from "axios";

// Backend base URL
const API_BASE_URL = "http://localhost:8080/api/auth";

export async function loginUser(credentials) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/login`,
      credentials
    );

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error.response?.data || "Login failed";
  }
}
