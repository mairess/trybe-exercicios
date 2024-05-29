package com.betrybe.alexandria.controller.dto;

import com.betrybe.alexandria.entity.Book;
import java.util.List;

public record BookDto(
    Long id,
    String title,
    String genre,
    PublisherDto publisher,
    List<AuthorDto> authors) {

  public static BookDto fromEntity(Book book) {
    PublisherDto publisherDto = book.getPublisher() != null ?
        PublisherDto.fromEntity(book.getPublisher()) : null;

    return new BookDto(
        book.getId(),
        book.getTitle(),
        book.getGenre(),
        publisherDto,
        book.getAuthors()
            .stream()
            .map(AuthorDto::fromEntity)
            .toList()
    );
  }
}