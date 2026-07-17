import { createContext, useContext, useState } from "react";
import { loginUser, logoutUser } from "../services/authService";
import { toast } from "react-toastify";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  async function login(data) {
    try {
      setLoading(true);

      const res = await loginUser(data);

      localStorage.setItem("token", res.data.token);

      setUser(res.data.user);

      toast.success("Login Successful");

      return true;

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Login Failed"
      );

      return false;

    } finally {

      setLoading(false);

    }
  }

  async function logout() {

    try {

      await logoutUser();

    } catch {}

    localStorage.removeItem("token");

    setUser(null);

  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);