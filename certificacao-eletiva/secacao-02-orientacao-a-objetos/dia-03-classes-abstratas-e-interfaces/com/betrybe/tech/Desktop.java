package com.betrybe.tech;

/**
 * The type Desktop.
 */
public class Desktop extends ComputerDevice {

  /**
   * Instantiates a new Desktop.
   *
   * @param brand           the brand
   * @param storageCapacity the storage capacity
   */
  public Desktop(String brand, double storageCapacity) {
    super(brand, storageCapacity);
  }

  @Override
  public void bootUp() {
    System.out.println("Inicializando o computador desktop...");
  }
}