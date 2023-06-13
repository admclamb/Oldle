package com.oldle.application.day;

import org.springframework.data.annotation.Id;

import com.oldle.application.common.primitives.Date;
import com.oldle.application.picture.Picture;

public class Day {
    
    @Id
    private String id;
    private Date date;
    private Picture picture;
    private Boolean isEditable;

    public Day(String year) {
        this.date = new Date(year);
        this.isEditable = false;
    }

    public String getId() {
        return this.id;
    }

    public Date getDate() {
        return this.date;
    }

    public Picture getPicture() {
        return this.picture;
    }

    public Boolean getIsEditable() {
        return this.isEditable;
    }
}
