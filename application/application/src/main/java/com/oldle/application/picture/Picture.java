package com.oldle.application.picture;

import org.springframework.data.annotation.Id;

import com.oldle.application.common.primitives.Date;
import com.oldle.application.common.primitives.Image;

public class Picture {

    @Id
    public Id id;

    private String title;
    private Image image;
    private Date date;
    private String hint;
    private Image alternateImage;

    public Picture(String title, Image image, Date date, String hint, Image alternateImage) {
        this.title = title;
        this.image = image;
        this.date = date;
        this.hint = hint;
        this.alternateImage = alternateImage;
    }

    public String getTitle() {
        return this.title;
    }
}
