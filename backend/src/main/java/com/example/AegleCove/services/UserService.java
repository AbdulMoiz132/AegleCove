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
        //TODO: Read from file and compare to authenticate
        return USERNAME.equals(username) && PASSWORD.equals(password);
    }

    public boolean register(User entry) 
    {
        //TODO: Write users data to file
        USERNAME = entry.getUsername();
        PASSWORD = entry.getPassword();
        return true;
    }

    public User getUserInfo(String username) 
    {
        //TODO: Read from file and return user info
        return new User();
    }
}

