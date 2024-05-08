package com.betrybe.tech;

/**
 * The type Laptop.
 */
public class Laptop extends ComputerDevice implements Chargeable {

  private double size;  // tamanho (14", 15", etc)

  /**
   * Instantiates a new Laptop.
   *
   * @param brand           the brand
   * @param storageCapacity the storage capacity
   * @param size            the size
   */
  public Laptop(String brand, double storageCapacity, double size) {
    super(brand, storageCapacity);

    this.size = size;
  }

  @Override
  public void bootUp() {
    System.out.println("Inicializando o laptop de tamanho " + size + "...");
  }

  @Override
  public void charge() {
    System.out.println("Charging Laptop...");
  }

  @Override
  public int getBatteryLevel() {
    return 80;
  }
}