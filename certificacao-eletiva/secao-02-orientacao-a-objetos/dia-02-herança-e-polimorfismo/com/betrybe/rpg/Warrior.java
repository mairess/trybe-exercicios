package com.betrybe.rpg;

public class Warrior extends PlayableCharacter {
  private String weapon;

  public String getWeapon() {
    return weapon;
  }

  public void setWeapon(String weapon) {
    this.weapon = weapon;
  }

  @Override
  public void attack() {
    if (!isAlive) {
      System.out.println("Character is dead cannot attack!");
    }

    System.out.println("Warrior is attacking!");
  }

  public void specialAttack() {
    if (!isAlive) {
      System.out.println("Character is dead cannot use specialAttack!");
    }

    System.out.println(this.getName() + "Character using specialAttack!");
  }
}