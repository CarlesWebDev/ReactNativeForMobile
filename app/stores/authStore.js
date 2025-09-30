import { create } from "zustand";
import axios from "axios";

const API_URL = "http://10.0.2.2:5000/api/auth";

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,

  register: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${API_URL}/register`, { email, password });
      set({
        user: res.data.user,
        token: res.data.token,
        loading: false,
        error: null,
      });
      return true;
    } catch (err) {
      set({
        error: err.response?.data?.message || "Register gagal",
        loading: false,
      });
      return false;
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      set({
        user: res.data.user,
        token: res.data.token,
        loading: false,
        error: null,
      });
      return true;
    } catch (err) {
      set({
        error: err.response?.data?.message || "Login gagal",
        loading: false,
      });
      return false;
    }
  },

  logout: () => {
    set({ user: null, token: null });
  },
}));
