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
    private final DataService dataService;

    public AnalyzerController() 
    {
        dataService = new DataService();
        this.graph = new SymptomDiseaseGraph();
        initializeGraph();
    }

    // Initialize the graph with edges from the data service
    void initializeGraph() 
    {
        // Replace LinkedList with List
        List<Edge> edges = dataService.getEdgeInfo();  // Now returning a List instead of LinkedList

        // Iterate over the List instead of using getHeadNode()
        for (Edge edge : edges) {
            graph.addEdge(edge.getSymptom(), edge.getDisease(), edge.getWeight());
        }
    }

    // Analyze symptoms using a POST request
    @PostMapping("/analyze")
    public ResponseEntity<Map<String, Integer>> analyzeSymptoms(@RequestBody List<String> symptoms) 
    {
        Map<String, Integer> results = graph.calculateDiseaseScores(symptoms);
        return ResponseEntity.ok(results);
    }
}
