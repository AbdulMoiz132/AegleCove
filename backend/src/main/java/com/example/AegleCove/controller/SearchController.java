package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.AegleCove.services.SearchService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/search")
public class SearchController 
{

    private final SearchService searchService;

    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping("/Search")
    public String getSearchinfo(@RequestParam String param) 
    {
        // TODO: Implement search controller methods here
        return " ";
    }   
}

