package com.betrybe.SistemaNutricional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class HoraRefeicao {

  public void calcularHoraRefeicao() {

    String formatoData = "dd/MM/yyyy";
    DateTimeFormatter formatadorData = DateTimeFormatter.ofPattern(formatoData);

    String formatoHora = "HH:mm:ss";
    DateTimeFormatter formatadorHora = DateTimeFormatter.ofPattern(formatoHora);

    LocalDateTime horaPrimeiraRefeicao = LocalDateTime.now();

    System.out.println("Primeira refeição do dia " + formatadorData.format(horaPrimeiraRefeicao) +
        " foi às: " + formatadorHora.format(horaPrimeiraRefeicao));


    System.out.println("Segunda refeição do  dia " + formatadorData.format(horaPrimeiraRefeicao.plusHours(3)) +
        " deve ser às: " + formatadorHora.format(horaPrimeiraRefeicao.plusHours(3)));


    System.out.println("Terceira refeição do dia " + formatadorData.format(horaPrimeiraRefeicao.plusHours(6)) +
        " deve ser às: " + formatadorHora.format(horaPrimeiraRefeicao.plusHours(6)));


    System.out.println("Quarta refeição do dia " + formatadorData.format(horaPrimeiraRefeicao.plusHours(9)) +
        " deve ser às: " + formatadorHora.format(horaPrimeiraRefeicao.plusHours(9)));


    System.out.println("Quinta refeição do dia " + formatadorData.format(horaPrimeiraRefeicao.plusHours(12)) +
        " deve ser às: " + formatadorHora.format(horaPrimeiraRefeicao.plusHours(12)));


    System.out.println("Sexta refeição do dia " + formatadorData.format(horaPrimeiraRefeicao.plusHours(15)) +
        " deve ser às: " + formatadorHora.format(horaPrimeiraRefeicao.plusHours(15)));
  }

}