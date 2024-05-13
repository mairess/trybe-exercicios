package com.betrybe.dependencyInjection;

public class CarRepairShop {

  public static void main(String[] args) {
    Motor motor = new Motor("gas");

    Car car = new Car(motor);
  }
}