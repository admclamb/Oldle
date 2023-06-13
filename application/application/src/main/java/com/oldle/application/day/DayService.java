package com.oldle.application.day;

import java.util.Map;

import org.springframework.stereotype.Service;

import com.oldle.application.common.classes.service.PaginationService;



@Service
public class DayService extends PaginationService<Day> {

    public Map<String, Object> listDays(int page, int size) {
        return this.findAll(page, size);
    }
}
