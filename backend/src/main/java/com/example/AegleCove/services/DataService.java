package com.example.AegleCove.services;

import com.example.AegleCove.entity.Disease;
import com.example.AegleCove.structures.LinkedList;
import com.example.AegleCove.entity.Medicine;

public class DataService 
{
    public LinkedList<String> data = new LinkedList<String>();

    public LinkedList<String> getmedicwithLetter(char letter)
    {
        //TODO: Search for medicines in file with given letter and return list
        return data;
    }

    public LinkedList<String> getdiseasewithLetter(char letter)
    {
        //TODO: Search for diseases in file with given letter and return list
        return data;
    }

    public Medicine getMedicineInfo(String name)
    {   
        //TODO: Search for medicines in file with given name and return list
        return new Medicine();
    }

    public Disease getDiseaseInfo(String name)
    {
        //TODO: Search for diseases in file with given name and return list
        return new Disease();
    }
}
