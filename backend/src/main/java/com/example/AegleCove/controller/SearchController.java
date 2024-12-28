package com.example.AegleCove.controller;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.AegleCove.services.SearchService;


@RestController
@RequestMapping("/search")
public class SearchController 
{
    private SearchService searchService;

    SearchController()
    {
        searchService = new SearchService();
    }

    @GetMapping
    public Object getSearchinfo(@RequestParam(required = false) String query) 
    {
        if (query == null || query.isEmpty()) {
            return "Please enter a search query";
        }
        Object result = searchService.Search(query);
        if (result == null) {
            return "No results found";
        }
        return result;
    }
}

