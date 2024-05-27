//Exercício 1

//A partir de uma lista de inteiros, filtre e retorne uma lista com apenas os números pares da coleção.

package com.betrybe.collections.exercise;

import java.util.ArrayList;
import java.util.List;

public class Exercise01 {

  public static void main(String[] args) {

    ArrayList<Integer> numbers = new ArrayList<Integer>();
    numbers.add(1);
    numbers.add(2);
    numbers.add(3);
    numbers.add(4);
    numbers.add(5);
    numbers.add(6);

    List<Integer> integerList = numbers.stream()
        .filter(element -> element % 2 == 0)
        .toList();

    System.out.println(integerList);
  }

}