package com.betrybe.example.dependencyInjection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MyClass {

  private final MyDependency dependency;

  @Autowired
  public MyClass(MyDependency dependency) {
    this.dependency = dependency;
  }

  public void useDoSomething() {
    dependency.doSomething();
  }
}