package com.example.AegleCove.entity;

public class Medicine 
{
    String name;
    String description;
    String sideEffects;
    String dosage;
    String price;
    String manufacturer;
    
    public Medicine()
    { 
      
    }
    
    public Medicine(String name, String description, String sideEffects, String dosage, String price, String manufacturer)
    {
        this.name = name;
        this.description = description;
        this.sideEffects = sideEffects;
        this.dosage = dosage;
        this.price = price;
        this.manufacturer = manufacturer;
    }

    public String getName()
    {
        return name;
    }

    public String getDescription()
    {
        return description;
    }

    public String getSideEffects()
    {
        return sideEffects;
    }

    public String getDosage()
    {
        return dosage;
    }

    public String getPrice()
    {
        return price;
    }

    public String getManufacturer()
    {
        return manufacturer;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public void setSideEffects(String sideEffects)
    {
        this.sideEffects = sideEffects;
    }

    public void setDosage(String dosage)
    {
        this.dosage = dosage;
    }

    public void setPrice(String price)
    {
        this.price = price;
    }

    public void setManufacturer(String manufacturer)
    {
        this.manufacturer = manufacturer;
    }
    
}
