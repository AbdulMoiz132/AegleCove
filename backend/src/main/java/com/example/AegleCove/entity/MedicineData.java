package com.example.AegleCove.entity;

import com.example.AegleCove.structures.LinkedList;

public class MedicineData implements Identifiable, Comparable<MedicineData> {
    private Long id;
    private String name;
    private String description;
    private String formula;
    private LinkedList<String> side_effects;
    private Dosage recommended_dosage;
    private LinkedList<String> alternative_medicines;
    
    public MedicineData() {}

    public MedicineData(Long id, String name, String description, String formula, LinkedList<String> side_effects, Dosage recommended_dosage, LinkedList<String> alternative_medicines) {
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

    public LinkedList<String> getSideEffects() {
        return side_effects;
    }

    public Dosage getRecommendedDosage() {
        return recommended_dosage;
    }

    public LinkedList<String> getAlternativeMedicines() {
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

    public void setSideEffects(LinkedList<String> side_effects) {
        this.side_effects = side_effects;
    }

    public void setRecommendedDosage(Dosage recommended_dosage) {
        this.recommended_dosage = recommended_dosage;
    }

    public void setAlternativeMedicines(LinkedList<String> alternative_medicines) {
        this.alternative_medicines = alternative_medicines;
    }
    
    @Override
    public int compareTo(MedicineData other) {
        return this.id.compareTo(other.getId());
    }
}

class Dosage {
    private String children;
    private String adults;

    public Dosage() {}

    public Dosage(String children, String adults) {
        this.children = children;
        this.adults = adults;
    }

    public String getChildren() {
        return children;
    }

    public String getAdults() {
        return adults;
    }

    public void setChildren(String children) {
        this.children = children;
    }

    public void setAdults(String adults) {
        this.adults = adults;
    }
}
