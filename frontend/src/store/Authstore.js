import { create } from "zustand";

const useAuthStore = create((set) => ({
   
 
    

    login: () => {
      localStorage.setItem('isAuthenticated', 'true');
      set({ isAuthenticated: true });
    },
    logout: () => {
      localStorage.removeItem('isAuthenticated');
      set({ isAuthenticated: false });
    },
  }));

  export default useAuthStore;