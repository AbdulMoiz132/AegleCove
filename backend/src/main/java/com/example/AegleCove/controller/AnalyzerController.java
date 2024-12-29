package com.example.AegleCove.controller;
import org.springframework.web.bind.annotation.*;

import com.example.AegleCove.structures.SymptomDiseaseGraph;
import com.example.AegleCove.entity.Edge; 
import com.example.AegleCove.services.DataService;

import org.springframework.http.ResponseEntity;
import java.util.*;


@RestController
@RequestMapping("/symptoms")
public class AnalyzerController 
{
    private final SymptomDiseaseGraph graph;
    private DataService dataService;
    public AnalyzerController() 
    {
        dataService = new DataService();
        this.graph = new SymptomDiseaseGraph();
        initializeGraph();
    }

    void initializeGraph() 
    {
        List<Edge> edges = dataService.getEdgeInfo();

        for (Edge edge : edges) 
        {
            graph.addEdge(edge.getSymptom(), edge.getDisease(), edge.getWeight());
        }
    }

    @PostMapping("/analyze")
    public ResponseEntity<Map<String, Integer>> analyzeSymptoms(@RequestBody List<String> symptoms) 
    {
        Map<String, Integer> results = graph.calculateDiseaseScores(symptoms);
        return ResponseEntity.ok(results);
    }
}
