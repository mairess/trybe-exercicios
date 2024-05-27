package com.maires;

import java.util.Scanner;

public class exampleScanner2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter with first number: ");
        String input1 = scanner.next();
        System.out.print("Enter with second number: ");
        String input2 = scanner.next();

        // converting String to int
        int n1 = Integer.parseInt(input1);
        int n2 = Integer.parseInt(input2);

        System.out.print("Entre com o número: ");
        String input = scanner.next();

        short numeroInteiroPequeno = Short.parseShort(input); // Converte para short.
        long numeroInteiroBemGrande = Long.parseLong(input); // Converte para long.
        float numeroDePontoFlutuante = Float.parseFloat(input); // Converte para float.
        double numeroDePontoFlutuanteComPrecisaoDupla = Double.parseDouble(input); // Converte para double.


        int result = n1 + n2;
        System.out.println("The sum result is: " + result);
        scanner.close();
    }
}
