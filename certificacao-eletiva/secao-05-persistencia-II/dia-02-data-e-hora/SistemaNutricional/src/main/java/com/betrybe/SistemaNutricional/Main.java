package com.betrybe.SistemaNutricional;

public class Main {

  public static void main(String[] args) {
    HoraRefeicao agenda = new HoraRefeicao();
    agenda.calcularHoraRefeicao();

    IdadeEmDias idade = new IdadeEmDias();
    System.out.println("A quantidade de dias desde o seu nascimento é: " + idade.calcularIdadeEmDias("2000-03-08T12:45:00"));
    System.out.println("A quantidade de dias desde o seu nascimento é: " + idade.calcularIdadeEmSegundos("2000-03-08T12:45:00"));

  }
}