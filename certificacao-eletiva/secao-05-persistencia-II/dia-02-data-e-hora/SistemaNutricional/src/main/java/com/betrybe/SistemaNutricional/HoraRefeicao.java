package com.betrybe.SistemaNutricional;

import java.time.LocalDateTime;

public class HoraRefeicao {

  public void calcularHoraRefeicao() {

    LocalDateTime horaPrimeiraRefeicao = LocalDateTime.now();

    System.out.println("Primeira refeição foi às: " + horaPrimeiraRefeicao);
    System.out.println("Segunda refeição deve ser às: " + horaPrimeiraRefeicao.plusHours(3));
    System.out.println("Terceira refeição deve ser às: " + horaPrimeiraRefeicao.plusHours(6));
    System.out.println("Quarta refeição deve ser às: " + horaPrimeiraRefeicao.plusHours(9));
    System.out.println("Quinta refeição deve ser às: " + horaPrimeiraRefeicao.plusHours(12));
    System.out.println("Sexta refeição deve ser às: " + horaPrimeiraRefeicao.plusHours(15));
  }

}