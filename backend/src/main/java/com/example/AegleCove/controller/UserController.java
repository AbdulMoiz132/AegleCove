package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/user")
public class UserController 
{
    // TODO: Implement user controller methods here 
    @GetMapping("/info")
    public String getUserInfo(@RequestParam String username) 
    {
        return "User info for " + username;
    }
}

