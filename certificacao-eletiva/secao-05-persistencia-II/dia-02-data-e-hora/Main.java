import java.time.Clock;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.format.DateTimeFormatter;

public class Main {

  public static void main(String[] args) {
    Clock clock = Clock.systemDefaultZone();
    System.out.println(clock.instant());
    System.out.println(clock);

    LocalDateTime now = LocalDateTime.now();
    System.out.println(now);

    LocalDateTime sufferDay = LocalDateTime.parse("2014-07-08T17:00:00");
    System.out.println(sufferDay);

    LocalDateTime dateTime = LocalDateTime.of(2023, 7, 11, 10, 30, 0);
    System.out.println(dateTime);

    LocalDateTime dateTime2 = LocalDateTime.of(2023, 7, 11, 10, 30, 0); // 2023-07-11T10:30:00
    int year = dateTime2.getYear();
    Month month = dateTime2.getMonth();
    int dayOfMonth = dateTime2.getDayOfMonth();
    int hour = dateTime2.getHour();
    int minute = dateTime2.getMinute();
    int second = dateTime2.getSecond();
    System.out.println(year);
    System.out.println(month);
    System.out.println(dayOfMonth);
    System.out.println(hour);
    System.out.println(minute);
    System.out.println(second);

    LocalDateTime dateTime3 = LocalDateTime.of(2023, 7, 11, 10, 30, 0); // 2023-07-11T10:30:00
// adiciona 1 ano e retorna um novo objeto LocalDateTime
    LocalDateTime newDateTime = dateTime3.plusYears(1); // 2024-07-11T10:30:00
    System.out.println(newDateTime);

    LocalDateTime dateTime4 = LocalDateTime.of(2023, 7, 11, 10, 30, 0); // 2023-07-11T10:30:00
// subtrai 2 meses e retorna um novo objeto LocalDateTime
    LocalDateTime newDateTime2 = dateTime4.minusMonths(2); // 2023-05-11T10:30:00
    System.out.println(newDateTime2);

    LocalDateTime dateTime5 = LocalDateTime.of(2023, 7, 11, 10, 30, 0); // 2023-07-11T10:30:00
    LocalDateTime newDateTime3 = dateTime5.withYear(2024); // 2024-07-11T10:30:00
    System.out.println(newDateTime3);

    LocalDateTime dateTime10 = LocalDateTime.of(2023, 7, 11, 10, 30, 0); // 2023-07-11T10:30:00
    LocalDateTime dateTime20 = LocalDateTime.of(2022, 10, 21, 10, 30, 0); // 2022-10-21T10:30:00
    boolean isBefore = dateTime10.isBefore(dateTime20); // dateTime1 é anterior a dateTime2? false
    boolean isAfter = dateTime10.isAfter(dateTime20); // dateTime1 é posterior a dateTime2? true
    boolean isEqual = dateTime10.isEqual(dateTime20); // dateTime1 é igual a dateTime2? false
    System.out.println(isBefore);
    System.out.println(isAfter);
    System.out.println(isEqual);

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
    String formattedDateTime = dateTime.format(formatter); // 11/07/2023 10:30:00
    System.out.println(formattedDateTime);

    AlertaAniversario alerta = new AlertaAniversario();
    alerta.checarAniversario();
  }
}