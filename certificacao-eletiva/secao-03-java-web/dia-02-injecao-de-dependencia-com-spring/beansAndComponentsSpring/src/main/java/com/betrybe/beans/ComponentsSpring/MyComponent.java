package com.betrybe.beans.ComponentsSpring;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MyComponent {
  private final String url;

  public MyComponent(@Value("${my.component.url}") String url) {
    this.url = url;
  }
}