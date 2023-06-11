package com.oldle.application.day;


import org.springframework.data.mongodb.repository.MongoRepository;

public interface DayRepository extends MongoRepository<Day, String>{
    
}
