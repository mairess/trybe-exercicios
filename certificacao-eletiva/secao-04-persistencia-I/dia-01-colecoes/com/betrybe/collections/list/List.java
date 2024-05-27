package com.betrybe.collections.list;

import java.util.ArrayList;
import java.util.Collections;

public class List {

  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<Integer>();
    numbers.add(7);
    numbers.add(2);
    numbers.add(1);
    numbers.add(9);
    System.out.println(numbers);
    Collections.sort(numbers);
    System.out.println(numbers);
  }
}