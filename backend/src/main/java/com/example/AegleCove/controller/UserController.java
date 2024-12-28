package com.example.AegleCove.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.AegleCove.services.UserService;
import com.example.AegleCove.entity.Message;
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
    public User getUser(@PathVariable Long id) 
    {
        User user = userService.UserInfo(id);
        return user;
    }     
    
    @PostMapping("/update")
    public ResponseEntity<Message> updateUser(@RequestBody User entry) 
    {
        boolean updated = userService.updateInfo(entry);
        if (!updated) 
        {
            return ResponseEntity.badRequest().body(new Message("Failed to update"));
        }
        return ResponseEntity.ok(new Message("Successfully Updated"));
    }

    @PostMapping("/delete")
    public ResponseEntity<String> deleteUser(@PathVariable Long id)
    {
        boolean deleted = userService.deleteUser(id);
        if (!deleted) 
        {
            return ResponseEntity.badRequest().body("Failed to delete");
        }
        return ResponseEntity.ok("Successfully Deleted");
    }
}


