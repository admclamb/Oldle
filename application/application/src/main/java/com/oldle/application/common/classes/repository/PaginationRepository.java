package com.oldle.application.common.classes.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaginationRepository<T, ID> extends MongoRepository<T, ID> {
    Page<List<T>> findAllPageable(Pageable pageable);
}
