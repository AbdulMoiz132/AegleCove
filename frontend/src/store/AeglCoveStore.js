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
  // Authentication state
  //  retrieves the "isAuthenticated" value from localStorage.
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",

  // User state (initialize from localStorage)
  // Includes user-related information such as personal details, medical history, and todos.
  user: getFromLocalStorage("user", {
    id: null,
    firstname: null,
    lastname: null,
    birthdate: null,
    gender: null,
    email: null,
    phonenumber: null,
    address: null,
    username: null,
    password: null,
    medical_history: [],
    userpendingtodos: [],
    usercompletetodos: [],
    weight: null,
    height: null,
    patient_bodytrack: {
      ibw: null,
      bmi: null,
      hip_to_wrist_ratio: null,
      body_fat_percentage: null,
      whtr: null,
      lbm: null,
      risk_score_for_diseases: null, 
    },
  }),

  // Diseases, medicines, and symptoms state (initialize empty arrays)
  diseases: [], // Stores a list of diseases.
  diseasedetails: [], // Detailed information about diseases.
  medicines: [], // Stores a list of medicines.
  medicinesdetails: [], // Detailed information about medicines.
  symptoms: [], // List of symptoms.
  symptomResult: { diseasesRank: [] }, 
  somecommonconditions: {
    // Example of common conditions with their associated symptoms.
    COVID_19: [
      "Fever or chills",
      "Respiratory symptoms, such as dry cough or shortness of breath",
      "Fatigue",
      "Body or muscle aches",
      "Headache",
      "Loss of taste or smell",
      "Sore throat",
      "Congestion or runny nose",
    ],
    Influenza: [
      "Fever or chills",
      "Cough",
      "Sore throat",
      "Runny or stuffy nose",
      "Muscle or body aches",
      "Headache",
      "Fatigue",
      "Vomiting or diarrhea (more common in children)",
    ],
  },


  // Update user details and sync to localStorage.
  setUser: (userData) =>
    set((state) => {
      const updatedUser = { ...state.user, ...userData };
      setToLocalStorage("user", updatedUser);
      return { user: updatedUser };
    }),

  // Add new diseases to the store.
  setDiseases: (diseases) =>
    set((state) => {
      const updatedDiseases = [...state.diseases, ...diseases];
      return { diseases: updatedDiseases };
    }),

  // Add detailed disease information.
  setDiseaseDetails: (diseaseDetails) =>
    set((state) => {
      const updatedDiseaseDetails = [
        ...state.diseasedetails,
        ...diseaseDetails,
      ];
      return { diseasedetails: updatedDiseaseDetails };
    }),

  // Add new medicines to the store.
  setMedicines: (medicines) =>
    set((state) => {
      const updatedMedicines = [...state.medicines, ...medicines];
      return { medicines: updatedMedicines };
    }),

  // Add detailed medicine information.
  setMedicinesDetails: (medicinesDetails) =>
    set((state) => {
      const updatedMedicinesDetails = [
        ...state.medicinesdetails,
        ...medicinesDetails,
      ];
      return { medicinesdetails: updatedMedicinesDetails };
    }),

  // Add new symptoms to the store.
  setSymptoms: (symptoms) =>
    set((state) => {
      const updatedSymptoms = [...state.symptoms, ...symptoms];
      return { symptoms: updatedSymptoms };
    }),

  // Update the symptom result object.
  setSymptomResult: (symptomResult) =>
    set((state) => {
      const updatedSymptomResult = { ...state.symptomResult, ...symptomResult };
      return { symptomResult: updatedSymptomResult };
    }),

  // Add a new pending todo and sync to localStorage.
  setPendingTodos: (todos) =>
    set((state) => {
      const updatedTodos = [...state.user.userpendingtodos, todos];
      const updatedUser = { ...state.user, userpendingtodos: updatedTodos };
      setToLocalStorage("user", updatedUser);
      return { user: updatedUser };
    }),

  // Add a new completed todo and sync to localStorage.
  setCompleteTodos: (todos) =>
    set((state) => {
      const updatedTodos = [...state.user.usercompletetodos, todos];
      const updatedUser = { ...state.user, usercompletetodos: updatedTodos };
      setToLocalStorage("user", updatedUser);
      return { user: updatedUser };
    }),

  // Delete a specific pending todo by index and sync to localStorage.
  setDeletePendingTodo: (indexToDelete) =>
    set((state) => {
      const updatedTodos = [...state.user.userpendingtodos];
      if (indexToDelete >= 0 && indexToDelete < updatedTodos.length) {
        updatedTodos.splice(indexToDelete, 1);
      }
      const updatedUser = { ...state.user, userpendingtodos: updatedTodos };
      setToLocalStorage("user", updatedUser);
      return { user: updatedUser };
    }),

  // Delete a specific completed todo by index and sync to localStorage.
  setDeleteCompleteTodo: (indexToDelete) =>
    set((state) => {
      const updatedTodos = [...state.user.usercompletetodos];
      if (indexToDelete >= 0 && indexToDelete < updatedTodos.length) {
        updatedTodos.splice(indexToDelete, 1);
      }
      const updatedUser = { ...state.user, usercompletetodos: updatedTodos };
      setToLocalStorage("user", updatedUser);
      return { user: updatedUser };
    }),

  // Update the patient's body tracking metrics and sync to localStorage.
  setPatientBodytrack: (patientBodytrack) =>
    set((state) => {
      const updatedBodyTrack = {
        ...state.user.patient_bodytrack,
        ...patientBodytrack,
      };
      const updatedUser = { ...state.user, patient_bodytrack: updatedBodyTrack };
      setToLocalStorage("user", updatedUser);
      return { user: updatedUser };
    }),



  // Reset the user state to default values and sync to localStorage.
  resetUser: () =>
    set(() => {
      const defaultUser = {
        id: null,
        firstname: null,
        lastname: null,
        birthdate: null,
        gender: null,
        email: null,
        phonenumber: null,
        address: null,
        username: null,
        password: null,
        medical_history: [],
        userpendingtodos: [],
        usercompletetodos: [],
        weight: null,
        height: null,
        patient_bodytrack: {
          ibw: null,
          bmi: null,
          hip_to_wrist_ratio: null,
          body_fat_percentage: null,
          whtr: null,
          lbm: null,
          risk_score_for_diseases: null,
        },
      };
      setToLocalStorage("user", defaultUser);
      return { user: defaultUser };
    }),

  // Reset diseases to an empty array.
  resetDiseases: () =>
    set(() => {
      return { diseases: [] };
    }),

  // Reset detailed disease information to an empty array.
  resetDiseaseDetails: () =>
    set(() => {
      return { diseasedetails: [] };
    }),

  // Reset symptoms to an empty array.
  resetSymptoms: () =>
    set(() => {
      return { symptoms: [] };
    }),

  // Reset symptom result to default.
  resetSymptomResult: () =>
    set(() => {
      const defaultResult = { diseasesRank: [] };
      return { symptomResult: defaultResult };
    }),

  // Reset all state values to their default and sync to localStorage.
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
          phonenumber: null,
          address: null,
          username: null,
          password: null,
          medical_history: [],
          userpendingtodos: [],
          usercompletetodos: [],
          weight: null,
          height: null,
          patient_bodytrack: {
            ibw: null,
            bmi: null,
            hip_to_wrist_ratio: null,
            body_fat_percentage: null,
            whtr: null,
            lbm: null,
            risk_score_for_diseases: null,
          },
        },
        diseases: [],
        diseasedetails: [],
        medicines: [],
        medicinesdetails: [],
        symptoms: [],
        symptomResult: { diseasesRank: [] },
        somecommonconditions: {},
      };
      return defaultState;
    }),
}));

export default useAegleCoveStore;
