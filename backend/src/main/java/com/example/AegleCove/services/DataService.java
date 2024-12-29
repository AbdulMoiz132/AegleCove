package com.example.AegleCove.services;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.example.AegleCove.entity.Disease;
import com.example.AegleCove.entity.DiseaseData;
import com.example.AegleCove.entity.Edge;
import com.example.AegleCove.entity.Medicine;
import com.example.AegleCove.entity.MedicineData;
import com.example.AegleCove.structures.Tree;
import com.example.AegleCove.structures.TreeNode;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;




public class DataService 
{
   private static final String medicine_list = "src//main//resources//medicines.json";
   private static final String diseases_list = "src//main//resources//disease.json";
   private static final String medicine_data = "src//main//resources//medicines_data.json";
   private static final String diseases_data = "src//main//resources//disease_data.json";
   private static final String edges = "src//main//resources//symptoms.json";

   private final ObjectMapper objectMapper = new ObjectMapper();

   private final Tree<MedicineData> medicineTree = new Tree<>();
   private final Tree<DiseaseData> diseaseTree = new Tree<>();
  

   public DataService() {
    loadMedicineTree();
    loadDiseaseTree();
    }


    private void loadMedicineTree() {
        File file = new File(medicine_data);
        try {
            List<MedicineData> medicines = objectMapper.readValue(file, new TypeReference<List<MedicineData>>() {});
            for (MedicineData medicine : medicines) {
                medicineTree.insert(medicine);
            }
        } catch (IOException e) {
            System.err.println("Error reading the MedicineData JSON file: " + e.getMessage());
        }
    }


    private void loadDiseaseTree() {
        File file = new File(diseases_data);
        try {
            List<DiseaseData> diseases = objectMapper.readValue(file, new TypeReference<List<DiseaseData>>() {});
            for (DiseaseData disease : diseases) {
                diseaseTree.insert(disease);
            }
        } catch (IOException e) {
            System.err.println("Error reading the DiseaseData JSON file: " + e.getMessage());
        }
    }


     public List<Medicine> getMedicinesByLetter(char letter)
      {
        List<Medicine> medicineWithLetter = new ArrayList<>();
        File file = new File(medicine_list);

        try{
             List<Medicine> medicines = objectMapper.readValue(file,new TypeReference<List<Medicine>>() {});
            
             for(Medicine medicine: medicines){
                if (medicine.getName().toLowerCase().charAt(0) == Character.toLowerCase(letter)) {
                    medicineWithLetter.add(medicine);
                }
             }
             return medicineWithLetter;
        }
        catch (IOException e) {
            System.out.println("Error reading the Medicines JSON file: " + e.getMessage());
            return new ArrayList<>();
        }
    }



    public List<Disease> getDiseasesByLetter(char letter)
     {
        List<Disease> diseasesWithLetter = new ArrayList<>();
        File file = new File(diseases_list);

        try{
             List<Disease> diseases = objectMapper.readValue(file,new TypeReference<List<Disease>>() {});
            
             for(Disease disease: diseases){
                if (disease.getName().toLowerCase().charAt(0) == Character.toLowerCase(letter)) {
                    diseasesWithLetter.add(disease);
                }
             }
             return diseasesWithLetter;
        }
        catch (IOException e) {
            System.out.println("Error reading the diseases JSON file: " + e.getMessage());
            return new ArrayList<>();
        }
    }


   
    public MedicineData getMedicineInfo(Long id){   
        TreeNode<MedicineData> node = medicineTree.search(id);
       if (node != null) {
        return node.getData();
       } else {
        System.err.println("MedicineData with id " + id + " not found.");
        return null;
       }
     }



    public DiseaseData getDiseaseInfo(Long id) {
        TreeNode<DiseaseData> node = diseaseTree.search(id);
        if (node != null) {
            return node.getData();
        } else {
            System.err.println("DiseaseData with id " + id + " not found.");
            return null;
        }
      }



    public List<Edge> getEdgeInfo() {
        List<Edge> edgeList = new ArrayList<>();  
        File file = new File(edges); 
    
        try {
            List<Edge> edges = objectMapper.readValue(file, new TypeReference<List<Edge>>() {});
    

            for (Edge edge : edges) {
                edgeList.add(edge); 
            }
    
            return edgeList;
        } catch (IOException e) {
            System.err.println("Error reading the edges JSON file: " + e.getMessage());
            return new ArrayList<>();
        }
    }
}

