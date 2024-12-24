package com.example.AegleCove.structures;

import java.util.HashMap;
import java.util.Map;

public class GraphNode 
{
    
    public String name; // Symptom or Disease name
    public Map<GraphNode, Integer> neighbors; // Adjacent nodes and edge weights

    public GraphNode(String name) 
    {
        this.name = name;
        this.neighbors = new HashMap<>();
    }

    public void addNeighbor(GraphNode node, int weight) {
        this.neighbors.put(node, weight);
    }
}