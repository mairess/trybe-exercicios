package com.betrybe.podcast.service;

import com.betrybe.podcast.model.Podcast;
import org.springframework.stereotype.Service;

/**
 * The type Podcas service.
 */
@Service
public class PodcastService {

  /**
   * Find podcast by id podcast.
   *
   * @param id the id
   * @return the podcast
   */
  public Podcast findPodcastById(Long id) {
    Podcast podcast = new Podcast();
    podcast.setName("My super Podcast");
    podcast.setUrl("https://mysuperpodcast.com.br");
    podcast.setId(id);

    return podcast;
  }
}