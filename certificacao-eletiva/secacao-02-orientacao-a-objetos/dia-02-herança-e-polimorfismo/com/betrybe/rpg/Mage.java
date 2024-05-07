package com.betrybe.rpg;

public class Mage extends PlayableCharacter{
  @Override
  public void attack() {
    if (!isAlive) {
      System.out.println("Character is dead cannot attack!");
    }

    System.out.println("Mage casts a spell!");
  }
}