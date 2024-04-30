package com.trybe.acc.java;

import java.util.Scanner;

public class FindNumbers {
        public void find() {
            Scanner scanner = new Scanner(System.in);

            System.out.print("Type your number: ");
            int number = scanner.nextInt();

            int predecessor = number - 1;
            int successor = number + 1;

            System.out.println("The number " + number + " has " + predecessor + " with its predecessor and " + successor + " with its successor ");

            scanner.close();
        }
}
