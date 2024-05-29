package com.betrybe.alexandria.controller;

import com.betrybe.alexandria.controller.dto.PublisherCreationDto;
import com.betrybe.alexandria.controller.dto.PublisherDto;
import com.betrybe.alexandria.entity.Publisher;
import com.betrybe.alexandria.service.PublisherService;
import com.betrybe.alexandria.service.exception.PublisherNotFoundException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/publishers")
public class PublisherController {

  private final PublisherService publisherService;

  @Autowired
  public PublisherController(PublisherService publisherService) {
    this.publisherService = publisherService;
  }

  @GetMapping("/{id}")
  public PublisherDto getPublisherById(@PathVariable Long id) throws PublisherNotFoundException {
    return PublisherDto.fromEntity(
        publisherService.findById(id)
    );
  }

  @GetMapping
  public List<PublisherDto> getAllPublishers() {
    List<Publisher> allPublishers = publisherService.findAll();
    return allPublishers.stream()
        .map(PublisherDto::fromEntity)
        .toList();
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public PublisherDto createPublisher(@RequestBody PublisherCreationDto publisherCreationDto) {
    return PublisherDto.fromEntity(
        publisherService.create(publisherCreationDto.toEntity())
    );
  }

  @PutMapping("/{id}")
  public PublisherDto updatePublisher(@PathVariable Long id,
      @RequestBody PublisherCreationDto publisherCreationDto) throws PublisherNotFoundException {
    return PublisherDto.fromEntity(
        publisherService.update(id, publisherCreationDto.toEntity())
    );
  }

  @DeleteMapping("/{id}")
  public PublisherDto deletePublisherById(@PathVariable Long id) throws PublisherNotFoundException {
    return PublisherDto.fromEntity(
        publisherService.deleteById(id)
    );
  }
}