package com.maires.productmanagement.controller.dto;

import com.maires.productmanagement.entity.Product;

public record ProductDto(Long id, String name, Double price) {

  public static ProductDto fromEntity(Product product) {
    return new ProductDto(
        product.getId(),
        product.getName(),
        product.getPrice()
    );
  }
}