import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true', // Initialize state based on localStorage

  login: () => {
    localStorage.setItem('isAuthenticated', 'true'); // Store authentication status in localStorage
    set({ isAuthenticated: true }); // Update state
  },

  logout: () => {
    localStorage.removeItem('isAuthenticated'); // Remove authentication status from localStorage
    set({ isAuthenticated: false }); // Update state
  },
}));

export default useAuthStore;
