package com.oldle.application.day;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class DayController {

    private DayService dayService;
    
    @GetMapping("/day")
    public Day getDay(@RequestParam("id") String id) {
        Day day = dayService.findOneById(id);
        return day;
    }
    
}
