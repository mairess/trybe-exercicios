package com.betrybe.SistemaNutricional;

import java.time.Duration;
import java.time.LocalDateTime;

public class ExampleDuration {

  public static void main(String[] args) {
    Duration diaParaMinutos = Duration.ofDays(1);
    System.out.println(diaParaMinutos.getSeconds());
    System.out.println(diaParaMinutos.getNano());

    LocalDateTime hoje = LocalDateTime.now();
    LocalDateTime diaPassado = LocalDateTime.parse("2021-12-20T17:00:00");

    Duration duracao = Duration.between(hoje, diaPassado);
    System.out.println(duracao.toDays());
  }
}