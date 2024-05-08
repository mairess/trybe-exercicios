package com.betrybe.tech;

public abstract class ComputerDevice {
  private String brand;
  private double storageCapacity;

  public ComputerDevice(String brand, double storageCapacity) {
    this.brand = brand;
    this.storageCapacity = storageCapacity;
  }

  public String getBrand() {
    return brand;
  }

  public double getStorageCapacity() {
    return storageCapacity;
  }

  // Método abstrato, sem implementação
  public abstract void bootUp();
}