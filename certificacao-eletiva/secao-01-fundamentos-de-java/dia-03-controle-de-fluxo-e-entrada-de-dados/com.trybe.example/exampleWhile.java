package com.trybe.example;

public class exampleWhile {
    public static void main(String[] args) {
//        int numberOfSubscribers = 100;
        int numTickets = 50;
        int firstSubscribers = 1;

        while (firstSubscribers <= numTickets) {
            printMessage("Subscriber number " + firstSubscribers + " won a ticket!");
            firstSubscribers++;
        }
    }

    static void printMessage(String message) {
        System.out.println(message);
    }
}
