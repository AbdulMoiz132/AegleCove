package com.example.AegleCove.services;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import com.example.AegleCove.entity.Disease;
import com.example.AegleCove.entity.DiseaseData;
import com.example.AegleCove.entity.Medicine;
import com.example.AegleCove.entity.MedicineData;
import com.example.AegleCove.entity.Edge;
import com.example.AegleCove.structures.LinkedList;
import com.example.AegleCove.structures.Tree;
import com.example.AegleCove.structures.TreeNode;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DataService 
{
    private static final Logger logger = LoggerFactory.getLogger(DataService.class);
    private static final String medicine_list = "src//main//resources//medicines.json";
    private static final String medicine_data = "src//main//resources//medicines_data.json";
    private static final String disease_list = "src//main//resources//disease.json";
    private static final String disease_data = "src//main//resources//disease_data.json";

    private final ObjectMapper objectMapper = new ObjectMapper();
    private Tree<MedicineData> medicineTree = new Tree<>();
    private Tree<DiseaseData> diseaseTree = new Tree<>();
    private List<Medicine> medicines;
    private List<Disease> diseases;

    public DataService() {
        loadMedicines();
        loadMedicineDetails();
        loadDiseases();
        loadDiseaseDetails();
    }

    private void loadMedicines() {
        File file = new File(medicine_list);
        try {
            medicines = objectMapper.readValue(file, new TypeReference<List<Medicine>>() {});
            logger.info("Loaded {} medicines", medicines.size());
        } catch (IOException e) {
            logger.error("Error reading the Medicines JSON file: {}", e.getMessage());
            medicines = List.of(); // Initialize to an empty list to avoid null pointer exceptions
        }
    }

    private void loadMedicineDetails() {
        File file = new File(medicine_data);
        try {
            List<MedicineData> detailedMedicines = objectMapper.readValue(file, new TypeReference<List<MedicineData>>() {});
            for (MedicineData medicine : detailedMedicines) {
                logger.info("Inserting MedicineData with id: {}", medicine.getId());
                medicineTree.insert(medicine);
            }
            logger.info("Inserted {} MedicineData objects into the tree", detailedMedicines.size());
        } catch (IOException e) {
            logger.error("Error reading the Medicines Data JSON file: {}", e.getMessage());
        }
    }

    private void loadDiseases() {
        File file = new File(disease_list);
        try {
            diseases = objectMapper.readValue(file, new TypeReference<List<Disease>>() {});
            logger.info("Loaded {} diseases", diseases.size());
        } catch (IOException e) {
            logger.error("Error reading the Diseases JSON file: {}", e.getMessage());
            diseases = List.of(); // Initialize to an empty list to avoid null pointer exceptions
        }
    }

    private void loadDiseaseDetails() {
        File file = new File(disease_data);
        try {
            List<DiseaseData> detailedDiseases = objectMapper.readValue(file, new TypeReference<List<DiseaseData>>() {});
            for (DiseaseData disease : detailedDiseases) {
                logger.info("Inserting DiseaseData with id: {}", disease.getId());
                diseaseTree.insert(disease);
            }
            logger.info("Inserted {} DiseaseData objects into the tree", detailedDiseases.size());
        } catch (IOException e) {
            logger.error("Error reading the Diseases Data JSON file: {}", e.getMessage());
        }
    }

    public List<Medicine> getMedicinesByLetter(char letter) {
        return medicines.stream()
                .filter(medicine -> medicine.getName().toLowerCase().charAt(0) == Character.toLowerCase(letter))
                .collect(Collectors.toList());
    }

    public List<Disease> getDiseasesByLetter(char letter) {
        return diseases.stream()
                .filter(disease -> disease.getName().toLowerCase().charAt(0) == Character.toLowerCase(letter))
                .collect(Collectors.toList());
    }

    public MedicineData getMedicineInfo(Long id) {   
        logger.info("Searching for MedicineData with id: {}", id);
        MedicineData tempMedicine = new MedicineData();
        tempMedicine.setId(id);
        TreeNode<MedicineData> node = medicineTree.search(tempMedicine);
        if (node == null) {
            logger.warn("Medicine with id {} not found", id);
            return null;
        }
        logger.info("Found MedicineData with id: {}", id);
        return node.getData();
    }

    public DiseaseData getDiseaseInfo(Long id) {
        logger.info("Searching for DiseaseData with id: {}", id);
        DiseaseData tempDisease = new DiseaseData();
        tempDisease.setId(id);
        TreeNode<DiseaseData> node = diseaseTree.search(tempDisease);
        if (node == null) {
            logger.warn("Disease with id {} not found", id);
            return null;
        }
        logger.info("Found DiseaseData with id: {}", id);
        return node.getData();
    }

    public LinkedList<Edge> getEdgeInfo()
    {
        return new LinkedList<>();
    }
}
