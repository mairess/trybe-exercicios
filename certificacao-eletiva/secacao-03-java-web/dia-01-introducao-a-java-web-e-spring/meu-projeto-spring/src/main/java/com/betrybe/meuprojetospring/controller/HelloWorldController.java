package com.betrybe.meuprojetospring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello-devtools")
public class HelloWorldController {

  @GetMapping
  public String sayHello() {
    return "Hello World! I am using hot reload";
  }
}