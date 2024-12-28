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

    private static final String login_file = "src//main//resources//login_info.json";
    private static final String user_data_file = "src//main//resources//user_data.json";
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



    public User UserInfo(Long id) 
    {
        File file = new File(user_data_file);

        try{
            Map<Long,User> user_data = objectMapper.readValue(file, new TypeReference<Map<Long,User>>() {} );
            
            if(user_data.containsKey(id)){
                return user_data.get(id);
            }
            else{
                return null;
            }               
          }

          catch(IOException e){
            System.err.println("Error encountered while retrieving user info "+e.getMessage());
            return null;
          }
    }


    public boolean updateInfo(User entry) 
    {
        File file = new File(user_data_file);

        try{
            Map<Long,User> user_data = objectMapper.readValue(file, new TypeReference<Map<Long,User>>(){});

            if(user_data.containsKey(entry.getId())){

                user_data.put(entry.getId(), entry);
                objectMapper.writeValue(file,user_data);

                return true;
            }
            else{
                System.err.println("The user with Id "+entry.getId()+" does not exist");
                return false;
            }
        }
        catch(IOException e){
            System.err.println("Error whilst updating user info:"+e.getMessage());
            return false;
        }
    }

    public boolean deleteUser(Long id) 
    {
        File file = new File(user_data_file);

        try{
            Map<Long,User> user_data = objectMapper.readValue(file, new TypeReference<Map<Long,User>>(){});

            if(user_data.containsKey(id)){
                user_data.remove(id);
                objectMapper.writeValue(file,user_data);

                return true;
            }
            else{
                System.err.println("User with Id "+id+"not found");
                return false;
            }
        }
        catch(IOException e){
            System.err.println("Error whilst deleting the user"+e.getMessage());
            return false;
        }
    }
}

