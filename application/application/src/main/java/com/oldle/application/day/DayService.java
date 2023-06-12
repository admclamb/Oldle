package com.oldle.application.day;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.oldle.application.common.classes.Service;

public class DayService extends Service<Day> {

    public DayService(MongoRepository<Day, String> repository) {
        super(repository);
    }
    public List<Day> listDays() {
        return this.getRepository().findAll(null, null);
    }
}
