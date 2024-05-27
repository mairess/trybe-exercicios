package com.betrybe.dependencyInjection.injection;

public class MyClass {

  private final MyDependency dependency;

  public MyClass(MyDependency dependency) {
    this.dependency = dependency;
  }

  public void useDoSomething() {
    dependency.doSomething();
  }
}