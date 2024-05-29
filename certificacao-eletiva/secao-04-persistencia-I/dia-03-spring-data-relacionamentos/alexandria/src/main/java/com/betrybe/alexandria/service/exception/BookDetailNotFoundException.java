package com.betrybe.alexandria.service.exception;

public class BookDetailNotFoundException extends NotFoundException {

  public BookDetailNotFoundException() {
    super("Book details not found!");
  }
}