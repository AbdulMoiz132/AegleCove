package com.example.AegleCove.FileHandling;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;

public class IDManager{
    private static final String Id_file_path = "src//main//resources//next_id.json" ;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public long getNextUser_ID() throws IOException {

        try{
        File file = new File(Id_file_path);
        if(file.length() == 0){
            return 1;
        }
        return objectMapper.readValue(file,Long.class);
        }

        catch (IOException e){
            System.err.println("Error reading from file of next_id : "+e.getMessage());
            return 1;
        }
    }


    public void incrementNextUser_ID() throws IOException {
        try{
            long next = getNextUser_ID() + 1;
            objectMapper.writerWithDefaultPrettyPrinter().writeValue(new File(Id_file_path),next);
        }
        catch(IOException e){
            System.err.println("Error incrementing next id : "+e.getMessage());
        }
    }

}