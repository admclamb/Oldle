package com.oldle.application.picture;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PictureRepository extends MongoRepository<Picture, String> {
}
