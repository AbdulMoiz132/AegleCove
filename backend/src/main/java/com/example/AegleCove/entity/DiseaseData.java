package com.example.AegleCove.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DiseaseData implements Identifiable, Comparable<DiseaseData> {
    private Long id;
    private String name;
    private String description;
    @JsonProperty("symptoms")
    private List<String> symptoms;
    @JsonProperty("treatment")
    private List<String> treatment;
    @JsonProperty("preventiveMeasures")
    private List<String> preventiveMeasures;

    public DiseaseData() {}

    public DiseaseData(Long id, String name, String description, List<String> symptoms, List<String> treatment, List<String> preventive_measures) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.symptoms = symptoms;
        this.treatment = treatment;
        this.preventiveMeasures = preventive_measures;
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

    public List<String> getSymptoms() {
        return symptoms;
    }

    public List<String> getTreatment() {
        return treatment;
    }

    public List<String> getPreventiveMeasures() {
        return preventiveMeasures;
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

    public void setSymptoms(List<String> symptoms) {
        this.symptoms = symptoms;
    }

    public void setTreatment(List<String> treatment) {
        this.treatment = treatment;
    }

    public void setPreventiveMeasures(List<String> preventive_measures) {
        this.preventiveMeasures = preventive_measures;
    }

    @Override
    public int compareTo(DiseaseData other) {
        return this.id.compareTo(other.getId());
    }
}