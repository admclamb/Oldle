package com.oldle.application.day;

import java.util.Map;


import com.oldle.application.common.classes.repository.PaginationRepository;
import com.oldle.application.common.classes.service.PaginationService;

public class DayService extends PaginationService<Day> {

    public DayService(PaginationRepository<Day, String> repository) {
        super(repository);
    }
    public Map<String, Object> listDays(int page, int size) {
        return this.findAll(page, size);
    }
}
