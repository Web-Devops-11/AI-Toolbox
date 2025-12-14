import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth";

export async function signupUser(userData) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/register`,
      userData
    );

    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error.response?.data || "Signup failed";
  }
}
