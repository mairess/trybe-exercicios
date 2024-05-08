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

    checkDevice(laptop);
    checkDevice(desktop);
  }

  public static void checkDevice(ComputerDevice device) {
    System.out.println("Verifying device of brand " + device.getBrand());
    device.bootUp();
  }
}