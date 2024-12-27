package com.example.AegleCove.entity;

import com.example.AegleCove.structures.LinkedList;

public class DiseaseData implements Identifiable, Comparable<DiseaseData> {
    private Long id;
    private String name;
    private String description;
    private LinkedList<String> symptoms;
    private LinkedList<String> treatment;
    private LinkedList<String> preventive_measures;

    public DiseaseData() {}

    public DiseaseData(Long id, String name, String description, LinkedList<String> symptoms, LinkedList<String> treatment, LinkedList<String> preventive_measures) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.symptoms = symptoms;
        this.treatment = treatment;
        this.preventive_measures = preventive_measures;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public LinkedList<String> getSymptoms() {
        return symptoms;
    }

    public LinkedList<String> getTreatment() {
        return treatment;
    }

    public LinkedList<String> getPreventiveMeasures() {
        return preventive_measures;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setSymptoms(LinkedList<String> symptoms) {
        this.symptoms = symptoms;
    }

    public void setTreatment(LinkedList<String> treatment) {
        this.treatment = treatment;
    }

    public void setPreventiveMeasures(LinkedList<String> preventive_measures) {
        this.preventive_measures = preventive_measures;
    }

    @Override
    public int compareTo(DiseaseData other) {
        return this.id.compareTo(other.getId());
    }
}