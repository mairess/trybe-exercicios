package com.betrybe.alexandria.service.excepetion;

public class AuthorNotFoundException extends NotFoundException {

  public AuthorNotFoundException() {
    super("Author not found!");
  }
}