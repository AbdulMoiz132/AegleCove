package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/search")
public class SearchController 
{
    @GetMapping("/Search")
    public String getSearchinfo(@RequestParam String param) 
    {
        // TODO: Implement search controller methods here
        return " ";
    }   
}

