package com.maires.exercise;

public class Carro {
  private static int counter = 0;

  private String brand;
  private String model;
  private int year;

  public Carro (String brand, String model, int year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    Carro.counter += 1;
  }

  public static int getInstancesCount() {
    return counter;
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public String getModel() {
    return model;
  }

  public void setModel(String model) {
    this.model = model;
  }

  public int getYear() {
    return year;
  }

  public void setYear(int year) {
    this.year = year;
  }

  public String showInformation() {
    return "Brand: %s, Model: %s, year: %s".formatted(
        brand, model, year
    );
  }
}
