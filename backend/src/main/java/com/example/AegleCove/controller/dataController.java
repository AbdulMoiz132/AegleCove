package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import com.example.AegleCove.entity.Medicine;
import com.example.AegleCove.entity.MedicineData;
import com.example.AegleCove.entity.Disease;
import com.example.AegleCove.entity.DiseaseData;
import com.example.AegleCove.services.DataService;
import java.util.List;  // Change from LinkedList to List


@RestController
@RequestMapping("/data")
public class DataController 
{
    private final DataService dataService;

    public DataController() 
    {
        dataService = new DataService();
    }

    @GetMapping("/medicines/{letter}")
    public ResponseEntity<List<Medicine>> getMedicines(@PathVariable char letter) 
    {
            List<Medicine> medicines = dataService.getMedicinesByLetter(letter);
            if (medicines == null || medicines.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(medicines, HttpStatus.OK);
    }

    @GetMapping("/diseases/{letter}")
    public ResponseEntity<List<Disease>> getDiseases(@PathVariable char letter) 
    {
            List<Disease> diseases = dataService.getDiseasesByLetter(letter);
            if (diseases == null || diseases.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(diseases, HttpStatus.OK);
    }

    @GetMapping("/medicine/{id}")
    public ResponseEntity<MedicineData> getMedicineInfo(@PathVariable Long id) 
    {
        MedicineData medicineData = dataService.getMedicineInfo(id);
        if (medicineData == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(medicineData, HttpStatus.OK);
    }

    @GetMapping("/disease/{id}")
    public ResponseEntity<DiseaseData> getDiseaseInfo(@PathVariable Long id)
    {
        DiseaseData diseaseData = dataService.getDiseaseInfo(id);
        if (diseaseData == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(diseaseData, HttpStatus.OK);
    }
}
