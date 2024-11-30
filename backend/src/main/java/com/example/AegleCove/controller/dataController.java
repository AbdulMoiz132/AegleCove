package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.AegleCove.structures.LinkedList;


@RestController
@RequestMapping("/data")
public class DataController 
{
    LinkedList<String> medicList = new LinkedList<>();
    LinkedList<String> diseaseList = new LinkedList<>();

    @GetMapping("/medicines")
    public LinkedList<String> getMedicines() {
        return medicList;
    }

    @GetMapping("/diseases")
    public  LinkedList<String >getDiseases() {
        return diseaseList;
    }
    
}
