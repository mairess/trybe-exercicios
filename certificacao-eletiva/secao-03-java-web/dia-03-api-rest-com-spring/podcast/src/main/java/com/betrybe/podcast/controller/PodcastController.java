package com.betrybe.podcast.controller;

import com.betrybe.podcast.dto.PodcastCreationDto;
import com.betrybe.podcast.dto.PodcastDTO;
import com.betrybe.podcast.model.Podcast;
import com.betrybe.podcast.service.PodcastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Podcast controller.
 */
@RestController
@RequestMapping("/podcasts")
public class PodcastController {

//  @RequestMapping(method = RequestMethod.GET)
//  public String getRoot() {
//    return "Opa!!!!!!!!!1";
//  }

  private PodcastService service;

  /**
   * Instantiates a new Podcast controller.
   *
   * @param service the service
   */
  @Autowired
  public PodcastController(PodcastService service) {
    this.service = service;
  }

  /**
   * Gets root.
   *
   * @return the root
   */
  @GetMapping
  public String getRoot() {
    return "Opa!!!!!!!!!1";
  }

  /**
   * Gets podcast.
   *
   * @param id the id
   * @return the podcast
   */
  @GetMapping("/{id}")
  //  public ResponseEntity<Object> getPodcast(@PathVariable Long id) {
  public ResponseEntity<PodcastDTO> getPodcast(@PathVariable Long id) {

    if (id > 1000) {
      //     return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found!");
      return ResponseEntity.notFound().build();
    }

    Podcast podcast = service.findPodcastById(id);
    PodcastDTO podcastDTO = new PodcastDTO(
        podcast.getId(), podcast.getName(), podcast.getUrl()
    );

    return ResponseEntity.ok(podcastDTO);
  }

  /**
   * Search podcast string.
   *
   * @param title the title
   * @return the string
   */
  @GetMapping("/search")
  public String searchPodcast(@RequestParam String title) {
    return "You asked for Podcast with title: %s".formatted(title);
  }

  /**
   * New podcast response entity.
   *
   * @param podcastCreationDto the podcast creation dto
   * @return the response entity
   */
  @PostMapping
  public ResponseEntity<PodcastDTO> newPodcast(@RequestBody PodcastCreationDto podcastCreationDto) {

    Podcast newPodcast = new Podcast();
    newPodcast.setName(podcastCreationDto.name());
    newPodcast.setUrl(podcastCreationDto.url());

    Podcast savedPodcast = service.savePodcast(newPodcast);

    PodcastDTO podcastDTO = new PodcastDTO(
        savedPodcast.getId(), savedPodcast.getName(), savedPodcast.getUrl()
    );

    return ResponseEntity.status(HttpStatus.CREATED).body(podcastDTO);
  }

}