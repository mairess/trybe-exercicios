package com.betrybe.dependencyInjection.injection;

public class Main {

  public static void main(String[] args) {

    MyDependency dependency = new MyDependency();
    MyClass myClass = new MyClass(dependency);

    myClass.useDoSomething();

  }
}