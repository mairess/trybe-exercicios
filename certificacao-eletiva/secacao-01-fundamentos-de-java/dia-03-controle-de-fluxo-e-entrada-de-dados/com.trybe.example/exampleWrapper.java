package com.trybe.example;

public class exampleWrapper {
    public static void main(String[] args) {
        int value = 42;
        Integer value2 = 7; // autoboxing (autoempacotamento

        int outroValor = value2; // unboxing (desempacotamento)

        System.out.println(
                Integer.toBinaryString(value)
        );
    }
}
