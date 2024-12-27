package com.example.AegleCove.entity;

public class Disease implements Comparable<Disease> {
    private Long id;
    private String name;

    public Disease() {}

    public Disease(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public int compareTo(Disease other) {
        return this.id.compareTo(other.getId());
    }
}
