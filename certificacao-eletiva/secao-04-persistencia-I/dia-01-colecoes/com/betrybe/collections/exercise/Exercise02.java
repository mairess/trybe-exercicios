//Exercício 2
//A partir de uma lista de Strings, filtre e retorne uma lista com todas elas em caixa alta.

package com.betrybe.collections.exercise;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Exercise02 {

  public static void main(String[] args) {

    ArrayList<String> stundents = new ArrayList<String>(Arrays.asList("João","Maria","Pedro","Rosa"));

    List<String> upperCaseStudents = stundents.stream()
        .map(String::toUpperCase)
        .toList();

    System.out.println(upperCaseStudents);

  }

}