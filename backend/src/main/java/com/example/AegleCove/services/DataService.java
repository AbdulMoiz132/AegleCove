package com.example.AegleCove.services;

import java.io.File;
import java.io.IOException;
import java.util.List;

import com.example.AegleCove.entity.Disease;
import com.example.AegleCove.entity.Medicine;
import com.example.AegleCove.structures.LinkedList;
import com.example.AegleCove.structures.Tree;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

public class DataService 
{
   private static final String medicine_list = "D://Desktop//AegleCove//backend//src//main//resources//medicine.json";
   private static final String diseases_list = "D://Desktop//AegleCove//backend//src//main//resources//disease.json";
   private static final String medicine_data = "D://Desktop//AegleCove//backend//src//main//resources//medicine_data.json";
   private static final String diseases_data = "D://Desktop//AegleCove//backend//src//main//resources//disease_data.json";

   private final ObjectMapper objectMapper = new ObjectMapper();
   private Tree<String> medicineTree = new Tree<>();
   private Tree<String> diseaseTree = new Tree<>();



    public LinkedList<String> getmedicwithLetter(char letter)
    {
        LinkedList<String> medicineWithLetter = new LinkedList<>();
        File file = new File(medicine_list);

        try{
             List<Medicine> medicines = objectMapper.readValue(file,new TypeReference<List<Medicine>>() {});
            
             for(Medicine medicine: medicines){
                if (medicine.getName().toLowerCase().charAt(0) == Character.toLowerCase(letter)) {
                    medicineWithLetter.append(medicine.getName());
                    medicineTree.insert(medicine.getId(), medicine);
                }
             }
             return medicineWithLetter;
        }
        catch (IOException e) {
            System.out.println("Error reading the Medicines JSON file: " + e.getMessage());
            return new LinkedList<>();
        }
    }

    public LinkedList<String> getdiseasewithLetter(char letter)
    {
        LinkedList<String> diseasesWithLetter = new LinkedList<>();
        File file = new File(diseases_list);

        try{
             List<Disease> diseases = objectMapper.readValue(file,new TypeReference<List<Disease>>() {});
            
             for(Disease disease: diseases){
                if (disease.getName().toLowerCase().charAt(0) == Character.toLowerCase(letter)) {
                    diseasesWithLetter.append(disease.getName());
                    diseaseTree.insert(disease.getId(), disease);
                }
             }
             return diseasesWithLetter;
        }
        catch (IOException e) {
            System.out.println("Error reading the diseases JSON file: " + e.getMessage());
            return new LinkedList<>();
        }
    }

    public Medicine getMedicineInfo(Long id)
    {   
        return medicineTree.search(id);
    }

    public Disease getDiseaseInfo(Long id)
    {
        return diseaseTree.search(id);
    }
}
