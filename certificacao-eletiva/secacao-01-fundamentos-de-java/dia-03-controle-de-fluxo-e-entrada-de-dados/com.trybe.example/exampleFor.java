package com.trybe.example;

public class exampleFor {
    public static void main(String[] args) {
        String[] names = new String[] {"MARCOS", "FERNANDA", "FELIPE", "JULIA"};

//        for (int i = 0; i < names.length; i++) {
//            printMessage(names[i]);
//        }

        for (String name : names) {
            printMessage(name);
        }

    }
    static void printMessage (String message) {
        System.out.println(message);
    }
}
