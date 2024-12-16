package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.AegleCove.entity.Medicine;
import com.example.AegleCove.structures.LinkedList;

@RestController
@RequestMapping("/data")
public class DataController 
{
    LinkedList<String> medicList = new LinkedList<>();
    LinkedList<String> diseaseList = new LinkedList<>();

    @GetMapping("/medicines")
    public LinkedList<String> getMedicines(@PathVariable char letter) 
    {
        // TODO: Search for medicines in file with given letter and return list
        return medicList;
    }

    @GetMapping("/diseases")
    public LinkedList<String >getDiseases(@RequestParam char letter) 
    {
        // TODO: Search for diseases in file with given letter and return list
        return diseaseList;
    }
  
    @GetMapping("/medicines/{medicine}")
    public Medicine getMedicineInfo(@RequestParam String medicine) 
    {
        // TODO: Search for medicine in file and return information
        
        return new Medicine();
    }
}

