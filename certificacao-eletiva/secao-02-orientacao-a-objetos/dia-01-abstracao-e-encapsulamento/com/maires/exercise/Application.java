package com.maires.exercise;

public class Application {

  public static void main(String[] args) {
    Carro myFiat = new Carro("Fiat", "XYU", 2023);
    Carro myHonda = new Carro("Honda", "VVC", 2021);
    Carro myChevrolet = new Carro("Chevrolet", "YYA", 2020);
    Carro myVolkswagen = new Carro("Volkswagen", "XXZ", 2019);

    System.out.println(Carro.getInstancesCount());
  }
}
