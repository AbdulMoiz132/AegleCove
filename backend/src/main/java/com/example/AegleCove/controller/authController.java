package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.AegleCove.entity.SigninRequest;
import com.example.AegleCove.entity.User;
import com.example.AegleCove.structures.LinkedList;
import com.example.AegleCove.services.UserService;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.AegleCove.entity.Message;


@RestController
@RequestMapping("/auth")
public class AuthController 
{
    private LinkedList<User> users = new LinkedList<>();
    private final UserService authService;

    public AuthController(UserService authService)
    {
        this.authService = authService;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/signin")
    public ResponseEntity<Message> login(@RequestBody SigninRequest request)
    {
        String id = authService.authenticate(request.getUsername(), request.getPassword());
        if (id == null)
        {
            return ResponseEntity.status(401).body(new Message("Invalid credentials"));
        }
        
        return ResponseEntity.ok(new Message(id));
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/signup")
    public ResponseEntity<Message> register(@RequestBody User entry) throws IOException
    {
        users.append(entry);
        boolean registered = authService.register(entry);
        if (registered)
        {
            return ResponseEntity.ok(new Message("Successfully registered"));
        }
        else
        {
            return ResponseEntity.badRequest().body(new Message("Username already Exist"));
        }
    }  
    
    @GetMapping("/users")
    public User getuserInfo(@RequestParam String username) 
    {
        return users.find(username);
    }
}

