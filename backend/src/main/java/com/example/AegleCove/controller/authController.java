package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.AegleCove.entity.SigninRequest;
import com.example.AegleCove.entity.User;
import com.example.AegleCove.structures.LinkedList;
import com.example.AegleCove.services.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
public class AuthController 
{
    private LinkedList<User> users = new LinkedList<>();
    private final UserService authService;;

    public AuthController(UserService authService)
    {
        this.authService = authService;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/signin")
    public ResponseEntity<String> login(@RequestBody SigninRequest request)
    {
        boolean valid = authService.authenticate(request.getUsername(), request.getPassword());
        if (!valid)
        {
            return ResponseEntity.status(401).body("Invalid credentials");
        }

        return ResponseEntity.ok("Login successful");
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/signup")
    public User register(@RequestBody User entry)
    {
        users.append(entry);
        boolean registered = authService.register(entry);
        if (registered)
        {
            return entry;
        }
        else
        {
            return null;
        }
    }  


    @GetMapping("/users")
    public User getuserInfo(@RequestParam String username) 
    {
        return users.find(username);
    }
    
}

