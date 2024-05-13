package com.betrybe.example.dependencyInjection;

import org.springframework.stereotype.Component;

@Component
public class MyDependency {

  public void doSomething() {
    System.out.println("Search CEP service...");
  }
}