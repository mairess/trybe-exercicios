package com.trybe.example;

public class exemapleDoWhile {
    public static void main(String[] args) {
        int attempts = 0;
        boolean received = false;
        String log;

        do {
            attempts += 1;
            log = "Trying deliver the package, attempt " + attempts;
            printLog(log);
            received = tryDeliver();
        } while (!received);

        attempts += 1;
        log = "Trying deliver the package, attempt " + attempts;

        received = tryDeliver();

        log = "Package delivered on attempt " + attempts;
        printLog(log);
    }

    static boolean tryDeliver() {

    }

    static void printLog(String log) {
        System.out.println(log);
    }
}
