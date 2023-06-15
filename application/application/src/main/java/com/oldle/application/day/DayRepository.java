package com.oldle.application.day;


import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DayRepository extends MongoRepository<Day, String>{
    
    Page<List<Day>> findAllPageable(Pageable pageable);
}
