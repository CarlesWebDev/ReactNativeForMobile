import { create } from "zustand";
import axios from "axios";

const API_URL = "http://10.0.2.2:5000/api/auth"; 
// kalau pakai emulator Android → 10.0.2.2
// kalau device real → pakai IP laptop misalnya: http://192.168.1.xxx:5000

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,


  // Register
  register: async (email, password) => {
    set({loading:true, err:null});
    try {
      const res = await axios.post(`${API_URL}/register`,{email, password});

      set({
        user: res.data.user,
        token: res.data.token,
        loading:false,
        error:null,
      });

      return true;
    } catch (err) {
      set({
        err: err.response?.data?.message || "register Gagal",
        loading: false,
      });
      return false;
    }
  },

  // login function
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

      return true; // login success
    } catch (err) {
      set({
        error: err.response?.data?.message || "Login gagal",
        loading: false,
      });
      return false;
    }
  },

  // logout function
  logout: () => {
    set({ user: null, token: null });
  },
}));
    