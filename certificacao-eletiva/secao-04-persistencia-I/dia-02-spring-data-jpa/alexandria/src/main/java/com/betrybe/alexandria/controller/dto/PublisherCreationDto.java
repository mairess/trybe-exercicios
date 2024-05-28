package com.betrybe.alexandria.controller.dto;

import com.betrybe.alexandria.entity.Publisher;

public record PublisherCreationDto(String name, String address) {

  public Publisher toEntity() {
    return new Publisher(name, address);
  }
}