package com.example.AegleCove.structures;

import com.example.AegleCove.algorithms.BFS;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

public class SymptomDiseaseGraph 
{
    private Map<String, GraphNode> nodes;

    public SymptomDiseaseGraph() 
    {
        this.nodes = new HashMap<>();
    }

    public GraphNode addNode(String name) 
    {
        nodes.putIfAbsent(name, new GraphNode(name));
        return nodes.get(name);
    }

    public void addEdge(String symptom, String disease, int weight) 
    {
        GraphNode symptomNode = addNode(symptom);
        GraphNode diseaseNode = addNode(disease);
        symptomNode.addNeighbor(diseaseNode, weight);
    }

    public GraphNode getNode(String name) 
    {
        return nodes.get(name);
    }

    public Map<String, Integer> calculateDiseaseScores(List<String> symptoms) 
    {
        Map<String, Integer> allScores = BFS.calculateDiseaseScores(nodes, symptoms);
        return allScores.entrySet().stream()
                .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
                .limit(3)
                .collect(HashMap::new, (m, e) -> m.put(e.getKey(), e.getValue()), HashMap::putAll);
    }
}
