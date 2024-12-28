package com.example.AegleCove.entity;

import java.util.LinkedList;

public class Record 
{
    String diseasename;
    String type;
    LinkedList<String> medicines;
    
    public Record()
    {
        diseasename = "";
        type = "";
        medicines = new LinkedList<>();
    }
}
