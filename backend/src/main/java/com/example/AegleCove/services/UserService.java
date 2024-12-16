package com.example.AegleCove.services;
import org.springframework.stereotype.Service;
import com.example.AegleCove.entity.User;

@Service
public class UserService 
{
    public String authenticate(String username, String password) 
    {
        //TODO: Read from file and compare to authenticate
        return null;
    }

    public boolean register(User entry) 
    {
        //TODO: Write users data to file
        return true;
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

