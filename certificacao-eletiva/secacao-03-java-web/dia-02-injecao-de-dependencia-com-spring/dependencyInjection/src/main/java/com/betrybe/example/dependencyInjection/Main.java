package com.betrybe.example.dependencyInjection;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {

  public static void main(String[] args) {

    AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
    context.scan("com.betrybe.example.dependencyInjection");
    context.refresh();

    MyClass myClass = context.getBean(MyClass.class);

    myClass.useDoSomething();
  }

}