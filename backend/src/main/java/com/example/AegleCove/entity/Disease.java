package com.example.AegleCove.entity;

public class Disease 
{
    String name;
    String description;
    String symptoms;
    String treatment;
    String prevention;
    
    public Disease()
    { 
      
    }
    
    public Disease(String name, String description, String symptoms, String treatment, String prevention)
    {
        this.name = name;
        this.description = description;
        this.symptoms = symptoms;
        this.treatment = treatment;
        this.prevention = prevention;
    }

    public String getName()
    {
        return name;
    }

    public String getDescription()
    {
        return description;
    }

    public String getSymptoms()
    {
        return symptoms;
    }

    public String getTreatment()
    {
        return treatment;
    }

    public String getPrevention()
    {
        return prevention;
    }

    public void setName(String name)
    {
        this.name = name;
    }
}