package com.example.AegleCove.entity;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MedicineData implements Identifiable, Comparable<MedicineData> {
    private Long id;
    private String name;
    private String description;
    private String formula;
    @JsonProperty("side_effects")
    private List<String> side_effects;
    @JsonProperty("recommended_dosage")
    private Object recommended_dosage;
    @JsonProperty("alternative_medicines")
    private List<String> alternative_medicines;
    
    public MedicineData() {}

    public MedicineData(Long id, String name, String description, String formula, List<String> side_effects, Dosage recommended_dosage, List<String> alternative_medicines) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.formula = formula;
        this.side_effects = side_effects;
        this.recommended_dosage = recommended_dosage;
        this.alternative_medicines = alternative_medicines;
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
        return side_effects;
    }

    public Object getRecommendedDosage() {
        return recommended_dosage;
    }

    public void setRecommendedDosage(Object recommended_dosage) {
        this.recommended_dosage = recommended_dosage;
    }

    public List<String> getAlternativeMedicines() {
        return alternative_medicines;
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
        this.side_effects = side_effects;
    }

   
    public void setAlternativeMedicines(List<String> alternative_medicines) {
        this.alternative_medicines = alternative_medicines;
    }
    
    @Override
    public int compareTo(MedicineData other) {
        return this.id.compareTo(other.getId());
    }
}

