package com.betrybe.alexandria.service.excepetion;

public class BookDetailNotFoundException extends NotFoundException{

  public BookDetailNotFoundException() {
    super("Book details not found!");
  }
}