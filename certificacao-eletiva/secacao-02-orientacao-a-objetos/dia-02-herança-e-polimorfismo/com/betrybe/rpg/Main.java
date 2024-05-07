package com.betrybe.rpg;

public class Main {

//  public static void main(String[] args) {
//    PlayableCharacter warrior = new Warrior();
//    warrior.setName("Aragorn");
//    warrior.setRace("Human");
//    warrior.setWeapon("Sword");
//
//    System.out.println(warrior.getName() + " race is " + warrior.getRace() + " and uses " + warrior.getWeapon());
//    System.out.println(warrior.getName() + " race is " + warrior.getRace());
//  }

//  public static void main(String[] args) {
//    Warrior player01 = new Warrior();
//    player01.setName("Aragorn");
//    player01.setWeapon("Sword");
//
//    PlayableCharacter player02 = new Warrior();
//    player02.setName("Aragorn");
//    player02.setWeapon("Sword");
//  }

//  public static void main(String[] args) {
//    Warrior player01 = new Warrior();
//    PlayableCharacter player02 = new Warrior();
//
//    addInformation(player01);
//    addInformation(player02);
//  }

//  public static void addInformation(PlayableCharacter player) {
//    player.setName("Aragorn");
//    player.setRace("Human");

//    player.setWeapon("Sword");
//  }

//  public static void main(String[] args) {
//    Warrior warrior = new Warrior();
//    warrior.move();
//    warrior.attack();
//
//    Mage mage = new Mage();
//    mage.move();
//    mage.attack();
//  }

//  public static void main(String[] args) {
//    Warrior warrior = new Warrior();
//    Cleric cleric = new Cleric();
//
//    moveAndAttack(warrior);
//    moveAndAttack(cleric);
//  }
//
//  public static void moveAndAttack(PlayableCharacter player) {
//    player.move();
//    player.attack();
//  }

//  public static void main(String[] args) {
//    Barbarian barbarian = new Barbarian();
//    barbarian.move();
//  }

  public static void main(String[] args) {
    Cleric cleric = new Cleric();
    cleric.heal();
    cleric.heal("life potion");
    cleric.heal("light spell", 50);
  }
}