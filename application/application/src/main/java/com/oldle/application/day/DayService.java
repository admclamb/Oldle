package com.oldle.application.day;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class DayService {

    private DayRepository repository;

    public DayService(DayRepository repository) {
        
    }

    public Page<List<Day>> findAll(int page, int size){
        Pageable paging = PageRequest.of(page, size);
        
        Page<List<Day>> pages = this.repository.findAllPageable(paging);
        return pages;
    }

    public Map<String, Object> listDays(int page, int size) {
        Page<List<Day>> pageOfDays = this.findAll(page, size);
        Map<String, Object> response = new HashMap<>();
        response.put("items", pageOfDays.getContent());
        response.put("currentPage", pageOfDays.getNumber());
        response.put("totalItems", pageOfDays.getTotalElements());
        response.put("totalPages",pageOfDays.getTotalPages());
        return response;
    }
}
