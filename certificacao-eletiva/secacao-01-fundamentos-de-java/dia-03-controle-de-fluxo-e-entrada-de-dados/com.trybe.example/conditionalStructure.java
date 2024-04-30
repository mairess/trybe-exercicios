package com.trybe.example;

import java.util.Random;

public class conditionalStructure {
    public static void main(String[] args) {
        int result = testResult();

        if (result > 7) {
            printMessage("Congratulations! You are in the next step!");
        } else {
            printMessage("Sorry, you got reproved.");
        }
    }

    static int testResult() {
        return new Random().ints(0, 11).findFirst().getAsInt();
    }

    static  void printMessage(String message) {
        System.out.println(message);
    }
}
