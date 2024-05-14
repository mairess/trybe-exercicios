package com.betrybe.podcast.controller;

import com.betrybe.podcast.model.Podcast;
import com.betrybe.podcast.service.PodcastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

  private PodcastService service;

  @Autowired
  public PodcastController(PodcastService service) {
    this.service = service;
  }

  @GetMapping
  public String getRoot() {
    return "Opa!!!!!!!!!1";
  }

  @GetMapping("/{id}")
//  public ResponseEntity<Object> getPodcast(@PathVariable Long id) {
  public ResponseEntity<Podcast> getPodcast(@PathVariable Long id) {

    if(id > 1000) {
//     return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found!");
     return ResponseEntity.notFound().build();
    }

    Podcast podcast = service.findPodcastById(id);

    return ResponseEntity.ok(podcast);
  }

  @GetMapping("/search")
  public String searchPodcast(@RequestParam String title) {
    return "You asked for Podcast with title: %s".formatted(title);
  }

}