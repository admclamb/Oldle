package com.oldle.application.picture;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.oldle.application.common.primitives.Id;

public interface PictureRepository extends MongoRepository<Picture, String> {
}
