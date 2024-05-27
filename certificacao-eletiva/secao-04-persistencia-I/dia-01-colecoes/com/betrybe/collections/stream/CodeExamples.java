package com.betrybe.collections.stream;

import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Set;

public class CodeExamples {

  public static Collection<Student> getInput() {
    return Set.of(
        new Student("2001", "Maria", "Computação"),
        new Student("2002", "João", "Computação"),
        new Student("2003", "José", "Pedagogia"),
        new Student("2004", "Ana", "Computação"),
        new Student("2005", "Bernardo", "Engenharia"),
        new Student("2006", "Antônia", "Computação"));
  }

  public static void main(String[] args) {
    Collection<Student> input = getInput();
    List<String> registrations = input.stream()
        .filter(element -> "Computação".equals(element.getCourse()))
        .sorted(Comparator.comparing(Student::getName))
        .map(Student::getRegistration)
        .toList();
    System.out.println(registrations);
  }

}