package com.betrybe.tech;

/**
 * The interface Chargeable.
 */
public interface Chargeable {

  /**
   * Charge.
   */
  void charge();

  /**
   * Gets battery level.
   *
   * @return the battery level
   */
  int getBatteryLevel();
}