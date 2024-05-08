package com.betrybe.tech;

/**
 * The type Application.
 */
public class Application {

  /**
   * The entry point of application.
   *
   * @param args the input arguments
   */

  //    public static void main(String[] args) {
  //    Laptop laptop = new Laptop("Samsung", 100, 14);
  //    laptop.bootUp();
  //    System.out.println(laptop.getBrand());
  //    System.out.println(laptop.getStorageCapacity());
  //  }
  public static void main(String[] args) {
    Laptop laptop = new Laptop("Samsung", 100, 14);
    Desktop desktop = new Desktop("Dell", 500);
    PowerBank powerBank = new PowerBank();

    checkDevice(laptop);
    checkDevice(desktop);

    powerBank.charge();
    System.out.println("PowerBank battery level: " + powerBank.getBatteryLevel());
    laptop.charge();
    System.out.println("Laptop battery level: " + laptop.getBatteryLevel());
    desktop.charge();
    System.out.println("Desktop battery level: " + desktop.getBatteryLevel());

    plugDevice(laptop);
    plugDevice(powerBank);

    Testing testing = new Testing("Testing", 50);
    testing.bootUp();
    testing.quantumComputation();
  }

  public static void checkDevice(ComputerDevice device) {
    System.out.println("Verifying device of brand " + device.getBrand());
    device.bootUp();
  }

  public static void plugDevice(Chargeable chargeable) {
    System.out.println("The actual battery level is " + chargeable.getBatteryLevel());
    chargeable.charge();
  }
}