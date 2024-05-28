package com.maires.productmanagement.controller.dto;

import com.maires.productmanagement.entity.Product;

public record ProductCreationDto(String name, Double price) {

  public Product toEntity() {
    return new Product(name, price);
  }
}