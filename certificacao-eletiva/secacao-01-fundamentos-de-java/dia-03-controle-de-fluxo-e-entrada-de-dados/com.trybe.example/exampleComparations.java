package com.trybe.example;

import java.util.Scanner;

public class exampleComparations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String hello = "Hello";
        System.out.print("Say hello: ");
        String input = scanner.next();

        if (hello == input) {
            System.out.println("This is not going to be printed");
        }

        if (hello != input) {
            System.out.println("This is going to be printed");
        }

        if (hello == hello) {
            System.out.println("This is also going to be printed");
        }

        if (hello.equals(input)) {
            System.out.println("This is also going to be printed if Hello is inputted in the terminal");
        }
    }
}
