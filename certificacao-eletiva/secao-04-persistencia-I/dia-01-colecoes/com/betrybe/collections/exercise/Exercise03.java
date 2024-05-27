//Exercício 3
//Calcule e imprima a soma de todos os números em uma lista de números.

package com.betrybe.collections.exercise;

import java.util.ArrayList;

public class Exercise03 {

  public static void main(String[] args) {

    ArrayList<Integer> numbers = new ArrayList<Integer>();
    numbers.add(1);
    numbers.add(2);
    numbers.add(3);
    numbers.add(4);
    numbers.add(5);
    numbers.add(6);

    int sumlist = numbers.stream()
        .mapToInt(Integer::intValue)
        .sum();

    System.out.println(sumlist);

  }
}