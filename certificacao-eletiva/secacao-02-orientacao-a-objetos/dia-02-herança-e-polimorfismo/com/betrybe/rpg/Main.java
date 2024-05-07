package com.betrybe.rpg;

public class Main {

  public static void main(String[] args) {
    Warrior warrior = new Warrior();
    warrior.setName("Aragorn");
    warrior.setRace("Human");
    warrior.setWeapon("Sword");

    System.out.println(warrior.getName() + " race is " + warrior.getRace() + " and uses " + warrior.getWeapon());
  }
}