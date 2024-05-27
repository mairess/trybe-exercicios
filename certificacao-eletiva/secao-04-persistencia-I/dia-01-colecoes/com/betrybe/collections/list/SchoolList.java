package com.betrybe.collections.list;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SchoolList {

  public static void main(String[] args) {
    ArrayList<String> students = new ArrayList<String>(Arrays.asList("João","Maria","Pedro","Rosa"));
//    List<String> students = Arrays.asList("João","Maria","Pedro","Rosa");
//    List<String> students = List.of("João","Maria","Pedro","Rosa");

    students.add("Joana");
    System.out.println(students);
    String studentIndex2 = students.get(2);
    System.out.println(studentIndex2);
//    students.set(0, "Joana");

    students.remove(1);
    System.out.println(students);
    students.remove("Pedro");
    System.out.println(students);
    System.out.println(students.size());

    System.out.println(students.contains("Rosa"));

  }

}