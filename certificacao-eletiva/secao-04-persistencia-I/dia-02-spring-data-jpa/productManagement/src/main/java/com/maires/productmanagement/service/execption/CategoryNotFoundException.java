package com.maires.productmanagement.service.execption;

public class CategoryNotFoundException extends NotFoundException {

  public CategoryNotFoundException() {
    super("Category not found!");
  }
}