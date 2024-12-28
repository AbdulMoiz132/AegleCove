package com.example.AegleCove.structures;

import java.util.HashMap;

public class GraphNode 
{
    
    public String name;
    public HashMap<GraphNode, Integer> neighbors; 

    public GraphNode(String name) 
    {
        this.name = name;
        this.neighbors = new HashMap<>();
    }

    public void addNeighbor(GraphNode node, int weight) {
        this.neighbors.put(node, weight);
    }
}
