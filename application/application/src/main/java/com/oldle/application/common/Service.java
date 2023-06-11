package com.oldle.application.common;

import org.springframework.data.mongodb.repository.MongoRepository;

public abstract class Service<T>{
    
    private MongoRepository<T, String> repository;

    public T findOneById(String id) {
        return repository.findOne(id);
    }

}
