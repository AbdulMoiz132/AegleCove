package com.example.AegleCove.services;
import org.springframework.stereotype.Service;
import com.example.AegleCove.entity.User;

@Service
public class UserService 
{
    private String USERNAME = null;
    private String PASSWORD = null;

    public boolean authenticate(String username, String password) 
    {
        return USERNAME.equals(username) && PASSWORD.equals(password);
    }

    public boolean register(User entry) 
    {
        USERNAME = entry.getUsername();
        PASSWORD = entry.getPassword();
        return true;
    }
}

