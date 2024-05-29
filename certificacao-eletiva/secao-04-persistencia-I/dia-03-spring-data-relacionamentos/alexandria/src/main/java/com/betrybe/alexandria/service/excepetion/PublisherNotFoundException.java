package com.betrybe.alexandria.service.excepetion;

public class PublisherNotFoundException extends NotFoundException {

  public PublisherNotFoundException() {
    super("Publisher not found!");
  }
}