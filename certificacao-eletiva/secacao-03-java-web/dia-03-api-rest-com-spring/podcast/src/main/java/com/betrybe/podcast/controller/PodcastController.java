package com.betrybe.podcast.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/podcasts")
public class PodcastController {

//  @RequestMapping(method = RequestMethod.GET)
//  public String getRoot() {
//    return "Opa!!!!!!!!!1";
//  }

  @GetMapping
  public String getRoot() {
    return "Opa!!!!!!!!!1";
  }

  @GetMapping("/{id}")
  public String getPodcast(@PathVariable Long id) {
    return "You asked for Podcast with id: %d".formatted(id);
  }

  @GetMapping("/search")
  public String searchPodcast(@RequestParam String title) {
    return "You asked for Podcast with title: %s".formatted(title);
  }

}