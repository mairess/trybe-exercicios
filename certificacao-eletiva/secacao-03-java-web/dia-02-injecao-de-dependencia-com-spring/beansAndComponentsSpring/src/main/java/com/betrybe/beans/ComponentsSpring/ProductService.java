package com.betrybe.beans.ComponentsSpring;

import org.springframework.stereotype.Component;

@Component
public class ProductService {

  private ProductRepository productRepository;

  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }
}