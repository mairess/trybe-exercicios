package com.betrybe.collections.map;

import java.util.HashMap;

public class Map {

  public static void main(String[] args) {

    HashMap<String, String> students = new HashMap<String, String>();

    students.put("x038702","João");
    students.put("x784244","Maria");
    students.put("x105852","Joana");

    System.out.println("Students: " +students);
    String previousValue = students.put("x038702","José");
    System.out.println("Previous value x038702: " +previousValue);
    System.out.println("Students: " +students);
    System.out.println(students.get("x105852"));
    students.remove("x038702");
    System.out.println("Students: " +students);

  }
}