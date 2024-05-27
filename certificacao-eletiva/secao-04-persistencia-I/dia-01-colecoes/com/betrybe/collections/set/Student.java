package com.betrybe.collections.set;

import java.util.HashSet;
import java.util.Set;

public class Student {

//  Unmodifiable
  Set<String> studentsUnmodifiable = Set.of("João","Maria","Pedro","Rosa");

//  Modifiable
  HashSet<String> students = new HashSet<>();

  public static void main(String[] args) {
    HashSet<String> students = new HashSet<>();

    boolean addJoao = students.add("João");
    boolean addJoaoAgain = students.add("João");
    boolean addMaria = students.add("Maria");

    System.out.println(String.format("addJoao: %b", addJoao));
    System.out.println(String.format("addJoaoAgain: %b", addJoaoAgain));
    System.out.println(String.format("addMaria: %b", addMaria));

    System.out.println(students);

    students.remove("João");

    System.out.println(students);

    System.out.println(students.size());

    System.out.println(students.contains("Maria"));
  }
}