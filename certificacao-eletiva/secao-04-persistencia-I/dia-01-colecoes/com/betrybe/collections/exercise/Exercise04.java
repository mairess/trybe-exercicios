package com.betrybe.collections.exercise;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Exercise04 {

  private final ArrayList<String> students;

  public Exercise04() {
    this.students = new ArrayList<String>(Arrays.asList("João","Maria","Pedro","Rosa"));
  }


  public static void main(String[] args) {

    Exercise04 exercise = new Exercise04();

    List<String> result = exercise.getStudentsOfLength(4);

    System.out.println(result);
  }


  public List<String> getStudentsOfLength(int length) {

    return students.stream()
        .filter(element -> element.length() > length)
        .toList();
  }

}