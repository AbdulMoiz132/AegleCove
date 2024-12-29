import { create } from "zustand";

// Helper functions for localStorage
const getFromLocalStorage = (key, defaultValue) => {
  if (typeof window === "undefined") return defaultValue;
  const savedData = localStorage.getItem(key);
  return savedData ? JSON.parse(savedData) : defaultValue;
};

const setToLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const useAegleCoveStore = create((set) => ({
  // User state (initialize from localStorage)
  user: getFromLocalStorage("user", {
    id: null,
    firstname: null,
    lastname: null,
    birthdate: null,
    gender: null,
    email: null,
    contact: null,
    address: null,
    username: null,
    password: null,
    medical_history: [],
    weight: null,
    height: null,
    patient_bodytrack: {
      bmi: null,
      ibw:null,
      bfp: null,
      lbm: null,
    },
  }),

  
  diseases: [],
  diseasedetails: {
    name: null,
    description: null,
    symptoms: [],
    treatment: [],
    preventiveMeasures: [],
  },
  medicines: [],
  medicinesdetails: {
    name: null,
    description: null,
    formula: null,
    sideEffects: [],
    recommendedDosage: { adults: null, children: null },
    alternativeMedicines: [],
  },


  // Update user details and sync to localStorage
  setUser: (userData) =>
    set((state) => {
      const updatedUser = { ...state.user, ...userData };
      setToLocalStorage("user", updatedUser);
      return { user: updatedUser };
    }),

  // Add new diseases to the store
  setDiseases: (diseases) =>
    set(() => {
      return { diseases: diseases };
    }),
  

  // Add detailed disease information
  setDiseaseDetails: (diseaseDetails) =>
    set((state) => {
      const updatedDiseaseDetails = { ...state.diseasedetails, ...diseaseDetails };
      return { diseasedetails: updatedDiseaseDetails };
    }),

  // Add new medicines to the store
  setMedicines: (medicines) =>
    set(() => {
      return { medicines: medicines };
    }),

  // Add detailed medicine information
  setMedicinesDetails: (medicinesDetails) =>
    set((state) => {
      const updatedMedicinesDetails = { ...state.medicinesdetails, ...medicinesDetails };
      return { medicinesdetails: updatedMedicinesDetails };
    }),

 
  // Update the patient's body tracking metrics and sync to localStorage
  setPatientBodytrack: (patientBodytrack) =>
    set((state) => {
      const updatedBodyTrack = { ...state.user.patient_bodytrack, ...patientBodytrack };
      const updatedUser = { ...state.user, patient_bodytrack: updatedBodyTrack };
      setToLocalStorage("user", updatedUser);
      return { user: updatedUser };
    }),

  // Add new medical history records and sync to localStorage
  setMedicalHistory: (medicalHistory) =>
    set((state) => {
      const updatedMedicalHistory = Array.isArray(medicalHistory)
        ? [...state.user.medical_history, ...medicalHistory]
        : [...state.user.medical_history, medicalHistory];
      const updatedUser = { ...state.user, medical_history: updatedMedicalHistory };
      setToLocalStorage("user", updatedUser);
      return { user: updatedUser };
    }),

  // Reset the user state to default values and sync to localStorage
  resetUser: () =>
    set(() => {
      const defaultUser = {
        id: null,
        firstname: null,
        lastname: null,
        birthdate: null,
        gender: null,
        email: null,
        contact: null,
        address: null,
        username: null,
        password: null,
        medical_history: [],  
        weight: null,
        height: null,
        patient_bodytrack: {
          bmi: null,
          ibw:null,
          bfp: null,
          lbm: null,
        },
      };
      setToLocalStorage("user", defaultUser);
      return { user: defaultUser };
    }),

  // Reset diseases to an empty array
  resetDiseases: () =>
    set(() => {
      return { diseases: [] };
    }),

  // Reset detailed disease information to an empty object
  resetDiseaseDetails: () =>
    set(() => {
      return { diseasedetails: {} };
    }),



  // Reset all state values to their default and sync to localStorage
  reset: () =>
    set(() => {
      const defaultState = {
        isAuthenticated: false,
        user: {
          id: null,
          firstname: null,
          lastname: null,
          birthdate: null,
          gender: null,
          email: null,
          contact: null,
          address: null,
          username: null,
          password: null,
          medical_history: [],
          weight: null,
          height: null,
          patient_bodytrack: {
            bmi: null,
            ibw:null,
            bfp: null,
            lbm: null,
          },
        },
        diseases: [],
        diseasedetails: {},
        medicines: [],
        medicinesdetails: {},
      };
      setToLocalStorage("user", defaultState.user);
      return defaultState;
    }),
}));

export default useAegleCoveStore;
