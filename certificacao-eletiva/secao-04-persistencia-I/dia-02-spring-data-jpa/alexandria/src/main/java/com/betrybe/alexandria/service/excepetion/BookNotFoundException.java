package com.betrybe.alexandria.service.excepetion;

public class BookNotFoundException extends NotFoundException {

  public BookNotFoundException() {
    super("Book not found!");
  }
}