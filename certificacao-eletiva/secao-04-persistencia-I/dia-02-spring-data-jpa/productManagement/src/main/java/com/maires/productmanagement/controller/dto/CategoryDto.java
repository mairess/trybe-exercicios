package com.maires.productmanagement.controller.dto;

import com.maires.productmanagement.entity.Category;

public record CategoryDto(Long id, String name) {

  public static CategoryDto fromEntity(Category category) {
    return new CategoryDto(
        category.getId(),
        category.getName()
    );
  }
}