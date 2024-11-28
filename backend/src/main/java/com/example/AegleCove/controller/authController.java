package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.AegleCove.entity.signupEntry;
import com.example.AegleCove.structures.linkedList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/auth")
public class authController 
{
    private linkedList<signupEntry> users = new linkedList<>();

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/signin")
    public String login()
    {
        return "Sign In";
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/signup")
    public String register(@RequestBody signupEntry entry)
    {
        users.append(entry);
        return "Sign Up Successfull";
    }

    @GetMapping("/users")
    public linkedList<signupEntry> getUsers()
    {
        return users;
    }
    
}

