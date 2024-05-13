package com.betrybe.beans.ComponentsSpring;

import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {

  public String getMessage() {
    return "Message: product returned!!!";
  }
}