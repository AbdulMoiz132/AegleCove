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

    @GetMapping("?query={param}")
    public Object getSearchinfo(@RequestParam String param) 
    {
        if(param == null)
        {
            return "Please enter a search query";
        }
        Object result = searchService.search(param);
        if(result == null)
        {
            return "No results found";
        }
        return result;
    }   
}

