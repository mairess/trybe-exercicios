package com.betrybe.tech;

/**
 * The type Computer device.
 */
public abstract class ComputerDevice {

  private String brand;
  private double storageCapacity;

  /**
   * Instantiates a new Computer device.
   *
   * @param brand           the brand
   * @param storageCapacity the storage capacity
   */
  public ComputerDevice(String brand, double storageCapacity) {
    this.brand = brand;
    this.storageCapacity = storageCapacity;
  }

  /**
   * Gets brand.
   *
   * @return the brand
   */
  public String getBrand() {
    return brand;
  }

  /**
   * Gets storage capacity.
   *
   * @return the storage capacity
   */
  public double getStorageCapacity() {
    return storageCapacity;
  }

  /**
   * Boot up.
   */
  // Método abstrato, sem implementação
  public abstract void bootUp();
}