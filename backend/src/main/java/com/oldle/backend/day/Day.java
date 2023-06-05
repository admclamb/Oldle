package com.oldle.backend.day;

import org.springframework.data.annotation.Id;

import com.oldle.backend.common.primitives.Date;
import com.oldle.backend.common.primitives.Picture;

public class Day {
    
    @Id
    private String Id;
    private Date date;
    private Picture picture;
    private Boolean isEditable;

    public Day(String year) {
        super();
        this.date = new Date(year);
        this.picture = new Picture();
        this.isEditable = false;
    }

}
