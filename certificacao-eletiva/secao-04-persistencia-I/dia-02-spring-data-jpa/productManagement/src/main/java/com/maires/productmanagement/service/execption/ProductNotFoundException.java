package com.maires.productmanagement.service.execption;

public class ProductNotFoundException extends NotFoundException {

  public ProductNotFoundException() {
    super("Product not found!");
  }
}