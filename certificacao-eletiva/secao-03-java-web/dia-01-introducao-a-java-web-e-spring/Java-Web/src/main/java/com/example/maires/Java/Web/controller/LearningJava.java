package com.example.maires.Java.Web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Learning java.
 */
@RestController
@RequestMapping("/javaweb")
public class LearningJava {


  /**
   * Saying hello string.
   *
   * @return the string
   */
  @GetMapping
  public String sayingHello() {
    return "Estou aprendendo a criar aplicações Java para a Web!!!!!";
  }
}