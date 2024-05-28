package com.maires.productmanagement.controller.dto;

import com.maires.productmanagement.entity.Brand;

public record BrandDto(Long id, String name) {

  public static BrandDto fromEntity(Brand brand) {
    return new BrandDto(
        brand.getId(),
        brand.getName()
    );
  }
}