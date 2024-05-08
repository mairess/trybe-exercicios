package com.betrybe.tech;

/**
 * The type Smartphone.
 */
public class SmartPhone extends ComputerDevice implements FastChargeable {

  /**
   * Instantiates a new Computer device.
   *
   * @param brand           the brand
   * @param storageCapacity the storage capacity
   */
  public SmartPhone(String brand, double storageCapacity) {
    super(brand, storageCapacity);
  }

  @Override
  public void fastCharge() {
    System.out.println("Charging SmartPhone in fastCharge mode...");
  }

  @Override
  public void charge() {
    System.out.println("Charging SmartPhone in fastCharge mode");
  }

  @Override
  public int getBatteryLevel() {
    return 99;
  }

  @Override
  public void bootUp() {
    System.out.println("Inicializando o SmartPhone...");
  }
}