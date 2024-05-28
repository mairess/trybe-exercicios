package com.maires.productmanagement.controller.dto;

import com.maires.productmanagement.entity.Brand;

public record BrandCreationDto(String name) {

  public Brand toEntity() {
    return new Brand(name);
  }
}