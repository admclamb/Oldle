package com.oldle.application.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;

public abstract class Service<T>{
    
    @Autowired
    private MongoRepository<T, String> repository;

    public T findOneById(String id) {
        return repository.findById(id).get();
    }
}
