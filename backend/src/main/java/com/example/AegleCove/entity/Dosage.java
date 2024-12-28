package com.example.AegleCove.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

class Dosage {
    @JsonProperty("children")
    private String children;
    @JsonProperty("adults")
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

