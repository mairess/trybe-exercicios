package com.maires.exampleWhile;

public class exampleWhile {
    public void logSubscribers() {
        String[] subscribers = { "MARCOS", "ALINE", "LUCAS", "PATRICIA", "JOAO", "FELIPE", "LUCIA", "ANTONIO", "FERNANDA",
                "MARCELA", "VITOR", "BEATRIZ", "JORGE", "JULIA" };

        final int numberOfPosition = 10;

        String[] positions = new String[numberOfPosition];

        int actualPosition = 0;

        String subscriber = "Undefined";
        String log;

        while (actualPosition < numberOfPosition) {
            subscriber = subscribers[actualPosition];
            log = "Adding subscription: " + subscriber + " in position " + (actualPosition + 1) + "\n";
            positions[actualPosition] = subscriber;
            actualPosition += 1;
            System.out.println(log);
        }
    }

    public static void main(String[] args) {
        exampleWhile structure = new exampleWhile();

        structure.logSubscribers();
    }
}
