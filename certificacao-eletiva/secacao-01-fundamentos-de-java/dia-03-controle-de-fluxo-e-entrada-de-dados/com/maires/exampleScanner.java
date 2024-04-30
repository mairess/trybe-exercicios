package com.maires;

import java.util.Scanner;

public class exampleScanner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("What is your name, friend? ");
        String name = scanner.next();
        System.out.println("Welcome, " + name + "!");
        scanner.close();
    }
}
