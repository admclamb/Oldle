package com.oldle.application.common.classes.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.oldle.application.common.classes.repository.PaginationRepository;

public class PaginationService<T> {

    private PaginationRepository<T, String> repository;
    private int currentPage;
    private int totalItems;
    private int totalPages;

    public  PaginationService(PaginationRepository<T, String> repository) {
        this.repository = repository;

    }

    public Map<String, Object> findAll(int page, int size){
        Pageable paging = PageRequest.of(page, size);
        
        Page<List<T>> pages = this.repository.findAllPageable(paging);
        
        Map<String, Object> response = new HashMap<>();
        response.put("items", pages.getContent());
        response.put("currentPage", pages.getNumber());
        response.put("totalItems", pages.getTotalElements());
        response.put("totalPages",pages.getTotalPages());
        return response;
    }

    public PaginationRepository<T, String> getRepository() {
        return this.repository;
    }
}
