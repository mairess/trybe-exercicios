package com.betrybe.tech;

/**
 * The type Power bank.
 */
public class PowerBank implements Chargeable {

  @Override
  public void charge() {
    System.out.println("Charging PowerBank");
  }

  @Override
  public int getBatteryLevel() {
    return 44;
  }

}