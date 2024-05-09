package com.betrybe.tech;

/**
 * The type Computer device.
 */
public abstract class ComputerDevice {

  public static final double MAX_STORAGE_CAPACITY = 2048.0;
  private final String brand;
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

  public final void shutDown() {
    System.out.println("Turning off the device...");
  }
}