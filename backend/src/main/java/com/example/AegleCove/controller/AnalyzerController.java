package com.example.AegleCove.controller;
import org.springframework.web.bind.annotation.*;

import com.example.AegleCove.structures.SymptomDiseaseGraph;

import org.springframework.http.ResponseEntity;

import java.util.*;


@RestController
@RequestMapping("/symptoms")
public class AnalyzerController 
{
    private final SymptomDiseaseGraph graph;

    public AnalyzerController() 
    {
        this.graph = new SymptomDiseaseGraph();
        initializeGraph();
    }

    void initializeGraph() {
        
        graph.addEdge("fever", "Flu", 7);
        graph.addEdge("fever", "Malaria", 9);
        graph.addEdge("fever", "Dengue", 8);
        graph.addEdge("cough", "Flu", 8);
        graph.addEdge("cough", "Tuberculosis", 9);
        graph.addEdge("cough", "Pneumonia", 7);
        graph.addEdge("headache", "Migraine", 10);
        graph.addEdge("headache", "Dengue", 6);
        graph.addEdge("headache", "Tension Headache", 8);
        graph.addEdge("fatigue", "Anemia", 9);
        graph.addEdge("fatigue", "Flu", 6);
        graph.addEdge("fatigue", "Diabetes", 7);
        graph.addEdge("rash", "Chickenpox", 10);
        graph.addEdge("rash", "Measles", 8);
        graph.addEdge("rash", "Dengue", 6);
        graph.addEdge("chills", "Malaria", 10);
        graph.addEdge("chills", "Flu", 7);
        graph.addEdge("vomiting", "Food Poisoning", 10);
        graph.addEdge("vomiting", "Dengue", 5);
        graph.addEdge("vomiting", "Malaria", 6);
    }


    @PostMapping("/analyze")
    public ResponseEntity<Map<String, Integer>> analyzeSymptoms(@RequestBody List<String> symptoms) 
    {
        Map<String, Integer> results = graph.calculateDiseaseScores(symptoms);
        return ResponseEntity.ok(results);
    }
}
