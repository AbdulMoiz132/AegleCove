package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.AegleCove.entity.Medicine;
import com.example.AegleCove.entity.Disease;
import com.example.AegleCove.structures.LinkedList;

import com.example.AegleCove.services.DataService;

@RestController
@RequestMapping("/data")
public class DataController 
{
    LinkedList<String> medicList = new LinkedList<>();
    LinkedList<String> diseaseList = new LinkedList<>();
    DataService dataService;

    DataController()
    {
        dataService = new DataService();
    }

    @GetMapping("/medicines")
    public LinkedList<String> getMedicines(@PathVariable char letter) 
    {
        medicList = dataService.getmedicwithLetter(letter);
        return medicList;
    }

    @GetMapping("/diseases")
    public LinkedList<String >getDiseases(@RequestParam char letter) 
    {
        diseaseList = dataService.getdiseasewithLetter(letter);
        return diseaseList;
    }
  
    @GetMapping("/medicines/{medicine}")
    public Medicine getMedicineInfo(@RequestParam String medicine) 
    {
        Medicine medicineInfo = dataService.getMedicineInfo(medicine);
        return medicineInfo;
    }

    @GetMapping("/diseases/{disease}")
    public Disease getDiseaseInfo(@RequestParam String disease)
    {
        Disease diseaseInfo = dataService.getDiseaseInfo(disease);
        return diseaseInfo;
    }
}

