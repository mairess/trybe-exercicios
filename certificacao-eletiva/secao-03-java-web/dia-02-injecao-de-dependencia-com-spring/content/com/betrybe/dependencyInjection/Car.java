package com.betrybe.dependencyInjection;

public class Car {

  private Motor motor;

  public Car(Motor motor) {
    this.motor = motor;
  }
}