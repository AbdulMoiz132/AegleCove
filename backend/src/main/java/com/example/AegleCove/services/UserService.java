package com.example.AegleCove.services;

import org.springframework.stereotype.Service;
import com.example.AegleCove.entity.User;
import com.example.AegleCove.FileHandling.FileHandler;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.util.Map;
import java.io.IOException;


@Service
public class UserService 
{
    FileHandler file1 = new FileHandler();

    private static final String login_file = "D://Desktop//AegleCove//backend//src//main//resources//login_info.json";
    private final ObjectMapper objectMapper = new ObjectMapper();

    public String authenticate(String username, String password) 
    {
         File file = new File(login_file);

        try{
            Map<String,User> logins = objectMapper.readValue(file, new TypeReference<Map<String,User>>(){});

            for(Map.Entry<String,User> entry : logins.entrySet()){
                User user = entry.getValue();

                if(user.getUsername().equals(username) && user.getPassword().equals(password)){
                    return String.valueOf(user.getId());
                }
            }
            return null;
        }
        catch(IOException e){
            System.err.println("Error while authenticating user: " + e.getMessage());
            return null;
        }
    }

    public boolean register(User entry) throws IOException 
    {
        boolean valid = file1.saveUser(entry);
        return valid;
    }

    public User UserInfo(int id) 
    {
        //TODO: Read from file and return user info
        return new User();
    }

    public boolean updateInfo(User entry) 
    {
        //TODO: Read from file, update and write back
        return true;
    }

    public boolean deleteUser(int id) 
    {
        //TODO: Read from file, delete and write back
        return true;
    }
}

