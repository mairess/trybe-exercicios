package com.betrybe.beans.ComponentsSpring;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProductConfig {

  @Bean
  public Database primaryDataBase() {
    return new Database("localhost");
  }
}