package com.example.AegleCove.services;

import org.springframework.stereotype.Service;

import com.example.AegleCove.entity.User;
import com.example.AegleCove.FileHandling.FileHandler;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.*;
import java.io.File;
import java.io.IOException;

@Service
public class UserService 
{
    FileHandler file1 = new FileHandler();

    private static final String login_file = "src//main//resources//login_info.json";
    private static final String user_data_file = "src//main//resources//user_data.json";
    private final ObjectMapper objectMapper = new ObjectMapper();

    public UserService() {
        objectMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL); // Exclude null values
    }

    public String authenticate(String username, String password) 
    {
        File file = new File(login_file);

        try {
            HashMap<String, User> logins = objectMapper.readValue(file, new TypeReference<HashMap<String, User>>() {});

            for (HashMap.Entry<String, User> entry : logins.entrySet()) {
                User user = entry.getValue();

                if (user.getUsername().equals(username) && user.getPassword().equals(password)) {
                    return String.valueOf(user.getId());
                }
            }
            return null;
        } catch (IOException e) {
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

        try {
            HashMap<Long, User> user_data = objectMapper.readValue(file, new TypeReference<HashMap<Long, User>>() {});
            
            if (user_data.containsKey(id)) 
            {
                return user_data.get(id);
            } 
            else 
            {
                return null;
            }               
        } catch (IOException e) {
            System.err.println("Error encountered while retrieving user info: " + e.getMessage());
            return null;
        }
    }

    public boolean updateInfo(User entry) {
        File userFile = new File(user_data_file);
        File loginFile = new File(login_file);
    
        try {
            // Load user data from file
            HashMap<Long, User> user_data = objectMapper.readValue(userFile, new TypeReference<HashMap<Long, User>>() {});
            System.out.println("Loaded User Data: " + user_data);
    
            // Validate if the user ID exists
            if (!user_data.containsKey(entry.getId())) {
                System.err.println("User with ID " + entry.getId() + " does not exist in user data.");
                return false;
            }
    
            // Update user data
            User existingUser = user_data.get(entry.getId());
            updateUserDetails(existingUser, entry); // Update all relevant fields
            user_data.put(entry.getId(), existingUser);
            objectMapper.writerWithDefaultPrettyPrinter().writeValue(userFile, user_data);
            System.out.println("User data updated successfully for ID: " + entry.getId());
    
            // Load login data from file
            HashMap<String, User> login_data = objectMapper.readValue(loginFile, new TypeReference<HashMap<String, User>>() {});
            System.out.println("Loaded Login Data: " + login_data);
    
            // Validate if the username exists
            if (!login_data.containsKey(entry.getUsername())) {
                System.err.println("User with Username " + entry.getUsername() + " does not exist in login data.");
                return false;
            }
    
            // Update login data (e.g., password only)
            User loginInfo = login_data.get(entry.getUsername());
            loginInfo.setPassword(entry.getPassword()); // Update the password
            login_data.put(entry.getUsername(), loginInfo);
            objectMapper.writerWithDefaultPrettyPrinter().writeValue(loginFile, login_data);
            System.out.println("Login data updated successfully for Username: " + entry.getUsername());
    
            return true; // Successfully updated
        } catch (IOException e) {
            System.err.println("Error while updating user info: " + e.getMessage());
            e.printStackTrace(); // Log stack trace for debugging
            return false;
        }
    }
    
    // Helper method to update all fields of a user
    private void updateUserDetails(User existingUser, User newUser) {
        existingUser.setFirstname(newUser.getFirstname());
        existingUser.setLastname(newUser.getLastname());
        existingUser.setBirthdate(newUser.getBirthdate());
        existingUser.setGender(newUser.getGender());
        existingUser.setAddress(newUser.getAddress());
        existingUser.setContact(newUser.getContact());
        existingUser.setEmail(newUser.getEmail());
        existingUser.setWeight(newUser.getWeight());
        existingUser.setHeight(newUser.getHeight());
        existingUser.setMedical_history(newUser.getMedical_history());
    }
    

    public boolean deleteUser(Long id) 
    {
        File file = new File(user_data_file);

        try {
            HashMap<Long, User> user_data = objectMapper.readValue(file, new TypeReference<HashMap<Long, User>>() {});

            if (user_data.containsKey(id)) {
                user_data.remove(id);
                objectMapper.writeValue(file, user_data);
                return true;
            } else {
                System.err.println("User with Id " + id + " not found");
                return false;
            }
        } catch (IOException e) {
            System.err.println("Error whilst deleting the user: " + e.getMessage());
            return false;
        }
    }
}