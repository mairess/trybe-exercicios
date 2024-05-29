package com.betrybe.alexandria.service.exception;

public class PublisherNotFoundException extends NotFoundException {

  public PublisherNotFoundException() {
    super("Publisher not found!");
  }
}