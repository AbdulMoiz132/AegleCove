package com.example.AegleCove.algorithms;

import com.example.AegleCove.structures.GraphNode;
import java.util.*;

public class BFS 
{
    public static Map<String, Integer> calculateDiseaseScores(Map<String, GraphNode> nodes, List<String> symptoms) 
    {
        Map<String, Integer> diseaseScores = new HashMap<>();

        for (String symptom : symptoms) 
        {
            GraphNode symptomNode = nodes.get(symptom);
            if (symptomNode != null)
            {
                for (Map.Entry<GraphNode, Integer> neighbor : symptomNode.neighbors.entrySet()) 
                {
                    String disease = neighbor.getKey().name;
                    int weight = neighbor.getValue();
                    diseaseScores.put(disease, diseaseScores.getOrDefault(disease, 0) + weight);
                }
            }
        }
        return diseaseScores;
    }
}
