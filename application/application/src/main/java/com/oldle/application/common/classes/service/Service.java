package com.oldle.application.common.classes.service;

import org.springframework.data.mongodb.repository.MongoRepository;

public abstract class Service<T>{
    private MongoRepository<T, String> repository;

    public Service(MongoRepository<T, String> repository) {
        this.repository = repository;
    }

    public T findOneById(String id) {
        return repository.findById(id).get();
    }


    public MongoRepository<T, String> getRepository() {
        return this.repository;
    }
}
