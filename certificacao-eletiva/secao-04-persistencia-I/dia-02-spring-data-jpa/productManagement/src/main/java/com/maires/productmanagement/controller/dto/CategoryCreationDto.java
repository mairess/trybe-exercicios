package com.maires.productmanagement.controller.dto;

import com.maires.productmanagement.entity.Category;

public record CategoryCreationDto(String name) {

  public Category toEntity() {
    return new Category(name);
  }
}