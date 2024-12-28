package com.example.AegleCove.FileHandling;

import com.example.AegleCove.entity.User; //user class 

import com.fasterxml.jackson.core.type.TypeReference; //classes for conversion from JSON to Java objects
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.File; 
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


public class FileHandler{
    private static final String userdata_FILE_PATH = "C://Users//LENOVO//Desktop//project//AegleCove//backend//src//main//resources//user_data.json";
    private static final String login_FILE_PATH = "C://Users//LENOVO//Desktop//project//AegleCove//backend//src//main//resources//login_info.json";

    private final ObjectMapper objectMapper = new ObjectMapper();
    private final IDManager idManager = new IDManager();

    public FileHandler() {
        objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL); // Exclude null values
    }



    public Map<Long,User> loadUsers() throws IOException{

        File file = new File(userdata_FILE_PATH);

        if (file.length() == 0) {
            return new HashMap<>();  // Return an empty map if the file doesn't exist or is empty
        }

        try {
            return objectMapper.readValue(file, new TypeReference<Map<Long,User>>() {});
        }

        catch(IOException e){
            System.err.println("Error while reading users from file:"+e.getMessage());
            return new HashMap<>();
        }
    }


    public Map<String,User> loadLogin() throws IOException{

        File file = new File(login_FILE_PATH);

        if (file.length() == 0) {
            return new HashMap<>();  // Return an empty map if the file doesn't exist or is empty
        }

        try {
            return objectMapper.readValue(file, new TypeReference<Map<String,User>>() {}); 
        }

        catch(IOException e){
            System.err.println("Error while reading usernames from file:"+e.getMessage());
            return new HashMap<>();
        }
    }



    public boolean saveUser(User user) throws IOException {

        try{
            Map<Long,User> userDetails = loadUsers();
            Map<String,User> logins = loadLogin();

            if (logins.containsKey(user.getUsername())) {
                System.err.println("Error: Username " + user.getUsername() + " already exists.");
                return false; 
            }

            if(user.getId() == null){
            long next_id = idManager.getNextUser_ID();
            user.setId(next_id);
            idManager.incrementNextUser_ID();
            
          }
          User userDetailsObject = new User(
            user.getFirstname(),
            user.getLastname(),
            user.getBirthdate(),
            user.getGender(),
            user.getAddress(),
            user.getContact(),
            user.getEmail()
        );
           userDetails.put(user.getId(), userDetailsObject);
           objectMapper.writerWithDefaultPrettyPrinter().writeValue(new File(userdata_FILE_PATH), userDetails);

            
            User login_data = new User(user.getId(),user.getUsername(),user.getPassword());
            logins.put(user.getUsername(),login_data);
            objectMapper.writerWithDefaultPrettyPrinter().writeValue(new File(login_FILE_PATH),logins);
            return true;
        }
        catch(IOException e){
            System.err.println("Error saving users to file: "+e.getMessage());
            return false;
        }
    }
}



