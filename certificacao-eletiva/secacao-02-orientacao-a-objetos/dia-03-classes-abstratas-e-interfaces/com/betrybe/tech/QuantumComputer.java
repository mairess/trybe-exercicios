package com.betrybe.tech;

/**
 * The type Quantum computer.
 */
public abstract class QuantumComputer extends ComputerDevice {

  /**
   * Instantiates a new Quantum computer.
   *
   * @param brand           the brand
   * @param storageCapacity the storage capacity
   */
  public QuantumComputer(String brand, double storageCapacity) {
    super(brand, storageCapacity);
  }

  /**
   * Quantum computer.
   */
  public abstract void quantumComputation();
}