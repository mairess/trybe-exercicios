package com.betrybe.electronic;

public class Application {

  public static void main(String[] args) {
    double sizeInCm = Television.convertToCentimeters(32);
    System.out.println("TV size is: " + sizeInCm);
    Television television = new Television("Phillips","LCD", 32);

    System.out.println("Modelo antigo:");
    System.out.println(television.getModel());

    television.setModel("LCD-Ultra");

    System.out.println("Modelo novo:");
    System.out.println(television.getModel());
  }
}
