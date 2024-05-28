package com.betrybe.alexandria.controller.dto;

import com.betrybe.alexandria.entity.Book;

public record BookCreationDto(String title, String genre) {

  public Book toEntity() {
    return new Book(title, genre);
  }

}