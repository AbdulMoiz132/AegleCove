package com.example.AegleCove.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.AegleCove.services.UserService;
import com.example.AegleCove.entity.User;

@RestController
@RequestMapping("/user")
public class UserController
{
    private final UserService userService;

    public UserController(UserService userService) 
    {
        this.userService = userService;
    }
    
    @GetMapping("/{id}")
    public User getUser(@PathVariable int id) 
    {
        User user = userService.UserInfo(id);
        return user;
    }     
    
    public ResponseEntity<String> updateUser(@RequestBody User entry) 
    {
        boolean updated = userService.updateInfo(entry);
        if (!updated) 
        {
            return ResponseEntity.badRequest().body("Failed to update");
        }
        return ResponseEntity.ok("Successfully Updated");
    }

    public ResponseEntity<String> deleteUser(@PathVariable int id)
    {
        boolean deleted = userService.deleteUser(id);
        if (!deleted) 
        {
            return ResponseEntity.badRequest().body("Failed to delete");
        }
        return ResponseEntity.ok("Successfully Deleted");
    }
}


