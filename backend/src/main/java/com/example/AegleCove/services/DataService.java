package com.example.AegleCove.services;

import com.example.AegleCove.entity.Disease;
import com.example.AegleCove.entity.Medicine;
import com.example.AegleCove.entity.Edge;
import com.example.AegleCove.entity.MedicineData;
import com.example.AegleCove.entity.DiseaseData;
import com.example.AegleCove.structures.LinkedList;

public class DataService 
{
    public LinkedList<Medicine> getMedicinesByLetter(char letter) 
    {
        return new LinkedList<Medicine>();
    }

    public LinkedList<Disease> getDiseasesByLetter(char letter) 
    {
        return new LinkedList<Disease>();
    }

    public MedicineData getMedicineInfo(Long id) 
    {   
        return new MedicineData();
    }

    public DiseaseData getDiseaseInfo(Long id) 
    {
        return new DiseaseData();
    }

    public LinkedList<Edge> getEdgeInfo()
    {
        return new LinkedList<Edge>();
    }
}
