package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import com.example.AegleCove.entity.Medicine;
import com.example.AegleCove.entity.MedicineData;
import com.example.AegleCove.entity.Disease;
import com.example.AegleCove.entity.DiseaseData;
import com.example.AegleCove.services.DataService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@RequestMapping("/data")
public class DataController 
{
    private static final Logger logger = LoggerFactory.getLogger(DataController.class);
    DataService dataService;

    DataController()
    {
        dataService = new DataService();
    }

    @GetMapping("/medicines/{letter}")
    public ResponseEntity<List<Medicine>> getMedicines(@PathVariable char letter) 
    {
        try {
            List<Medicine> medicines = dataService.getMedicinesByLetter(letter);
            if (medicines == null || medicines.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(medicines, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error getting medicines with letter {}: {}", letter, e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/diseases/{letter}")
    public ResponseEntity<List<Disease>> getDiseases(@PathVariable char letter) 
    {
        try {
            List<Disease> diseases = dataService.getDiseasesByLetter(letter);
            if (diseases == null || diseases.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(diseases, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error getting diseases with letter {}: {}", letter, e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/medicine/{id}")
    public ResponseEntity<MedicineData> getMedicineInfo(@PathVariable Long id) 
    {
        try {
            MedicineData medicineData = dataService.getMedicineInfo(id);
            if (medicineData == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(medicineData, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error getting medicine info for id {}: {}", id, e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/disease/{id}")
    public ResponseEntity<DiseaseData> getDiseaseInfo(@PathVariable Long id)
    {
        try {
            DiseaseData diseaseData = dataService.getDiseaseInfo(id);
            if (diseaseData == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(diseaseData, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error getting disease info for id {}: {}", id, e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e) {
        logger.error("Unhandled exception: {}", e.getMessage());
        return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

