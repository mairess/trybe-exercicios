package com.maires.productmanagement.service.execption;

public class BrandNotFoundException extends NotFoundException {

  public BrandNotFoundException() {
    super("Brand not found!");
  }

}