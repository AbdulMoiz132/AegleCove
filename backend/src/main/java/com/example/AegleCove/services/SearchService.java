package com.example.AegleCove.services;

import com.example.AegleCove.entity.MedicineData;
import com.example.AegleCove.entity.DiseaseData;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class SearchService 
{
    private static final String medicine_data = "src//main//resources//medicines_data.json";
    private static final String diseases_data = "src//main//resources//disease_data.json";
    private final ObjectMapper objectMapper = new ObjectMapper();

    public Object Search (String query){
        File file = new File(medicine_data);

        try{
            List<MedicineData> medicines = objectMapper.readValue(file,new TypeReference<List<MedicineData>>() {});
            for(MedicineData medicine: medicines){
             if (medicine.getName().equalsIgnoreCase(query)) {
                        return medicine;
               }
            }
        }
        catch (IOException e) {
            System.out.println("Error reading the Medicines JSON file: " + e.getMessage());
        }

        File file2 = new File(diseases_data);

        try{
            List<DiseaseData> diseases = objectMapper.readValue(file2,new TypeReference<List<DiseaseData>>() {});   

            for(DiseaseData disease: diseases){
                if (disease.getName().equalsIgnoreCase(query)) {
                    return disease;
                }
            }
        }
        catch (IOException e) {
            System.out.println("Error reading the Diseases JSON file: " + e.getMessage());
        }
        return null;
    }
}