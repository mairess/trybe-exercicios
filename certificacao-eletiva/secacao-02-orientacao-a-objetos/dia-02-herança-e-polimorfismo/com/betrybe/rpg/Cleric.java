package com.betrybe.rpg;

public class Cleric extends PlayableCharacter{
    public String magic;

  public String getMagic() {
    return magic;
  }

  public void setMagic(String magic) {
    this.magic = magic;
  }

  public void heal() {
    System.out.println("Cleric is healing with basic ability");
  }

  public void heal(String potion) {
    System.out.println("Cleric is healing with potion " + potion + ".");
  }

  public void heal(String spell, int power) {
    System.out.println("Cleric is using spell " + spell + " with power of " + power + ".");
  }
}