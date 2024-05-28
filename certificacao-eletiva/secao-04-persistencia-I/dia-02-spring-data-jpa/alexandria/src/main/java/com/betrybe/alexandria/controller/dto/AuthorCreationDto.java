package com.betrybe.alexandria.controller.dto;

import com.betrybe.alexandria.entity.Author;

public record AuthorCreationDto(String name, String nationality) {

  public Author toEntity() {
    return new Author(name, nationality);
  }
}