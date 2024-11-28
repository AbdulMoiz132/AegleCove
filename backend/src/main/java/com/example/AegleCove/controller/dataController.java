package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.AegleCove.structures.linkedList;


@RestController
@RequestMapping("/data")
public class dataController 
{
    linkedList<String> medicList = new linkedList<>();
    linkedList<String> diseaseList = new linkedList<>();

    @GetMapping("/medicines")
    public linkedList<String> getMedicines() {
        medicList.append("Paracetamol");
        return medicList;
    }

    @GetMapping("/diseases")
    public  linkedList<String >getDiseases() {
        diseaseList.append("Fever");
        return diseaseList;
    }
    
}
