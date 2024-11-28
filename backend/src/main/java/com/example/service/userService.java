package com.example.service;
import org.springframework.stereotype.Service;

@Service
class UserService {

    private static final String HARDCODED_USERNAME = "admin";
    private static final String HARDCODED_PASSWORD = "password123";

    public boolean authenticate(String username, String password) 
    {
        return HARDCODED_USERNAME.equals(username) && HARDCODED_PASSWORD.equals(password);
    }
}
