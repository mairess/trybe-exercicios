package com.betrybe.tech;

/**
 * The type Testing.
 */
public class Testing extends QuantumComputer {

  /**
   * Instantiates a new Quantum computer.
   *
   * @param brand           the brand
   * @param storageCapacity the storage capacity
   */
  public Testing(String brand, double storageCapacity) {
    super(brand, storageCapacity);
  }

  @Override
  public void quantumComputation() {
    System.out.println("Quantum computing from Testing class...");
  }

  @Override
  public void bootUp() {
    System.out.println("Initializing Testing class...");
  }
}