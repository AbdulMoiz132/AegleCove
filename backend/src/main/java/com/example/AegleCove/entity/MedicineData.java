package com.example.AegleCove.entity;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MedicineData implements Identifiable, Comparable<MedicineData> {
    private Long id;
    private String name;
    private String description;
    private String formula;
    @JsonProperty("sideEffects")
    private List<String> sideEffects;
    @JsonProperty("recommendedDosage")
    private Object recommendedDosage;
    @JsonProperty("alternativeMedicines")
    private List<String> alternativeMedicines;
    
    public MedicineData() {}

    public MedicineData(Long id, String name, String description, String formula, List<String> side_effects, Dosage recommended_dosage, List<String> alternative_medicines) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.formula = formula;
        this.sideEffects = side_effects;
        this.recommendedDosage = recommended_dosage;
        this.alternativeMedicines = alternative_medicines;
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

    public String getFormula() {
        return formula;
    }

    public List<String> getSideEffects() {
        return sideEffects;
    }

    public Object getRecommendedDosage() {
        return recommendedDosage;
    }

    public void setRecommendedDosage(Object recommended_dosage) {
        this.recommendedDosage = recommended_dosage;
    }

    public List<String> getAlternativeMedicines() {
        return alternativeMedicines;
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

    public void setFormula(String formula) {
        this.formula = formula;
    }

    public void setSideEffects(List<String> side_effects) {
        this.sideEffects = side_effects;
    }

   
    public void setAlternativeMedicines(List<String> alternative_medicines) {
        this.alternativeMedicines = alternative_medicines;
    }
    
    @Override
    public int compareTo(MedicineData other) {
        return this.id.compareTo(other.getId());
    }
}

