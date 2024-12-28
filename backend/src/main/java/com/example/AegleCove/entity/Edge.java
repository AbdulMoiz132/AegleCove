package com.example.AegleCove.entity;

public class Edge 
{
    String symptom;
    String disease;
    int weight;

    public Edge()
    {
        
    }

    public Edge(String symptom, String disease, int weight)
    {
        this.symptom = symptom;
        this.disease = disease;
        this.weight = weight;
    }

    public String getSymptom()
    {
        return symptom;
    }

    public void setSymptom(String symptom)
    {
        this.symptom = symptom;
    }

    public String getDisease()
    {
        return disease;
    }

    public void setDisease(String disease)
    {
        this.disease = disease;
    }

    public int getWeight()
    {
        return weight;
    }

    public void setWeight(int weight)
    {
        this.weight = weight;
    }
}
