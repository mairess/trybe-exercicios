import java.util.InputMismatchException;
import java.util.Scanner;

/**
 * The type Finally.
 */
public class Finally {

  /**
   * The entry point of application.
   *
   * @param args the input arguments
   */
  public static void main(String[] args) {

    Scanner scanner = new Scanner(System.in);

    try {
      int number = scanner.nextInt();
      int result = 25 / number;
      System.out.println(result);
    } catch (ArithmeticException error) {
      System.out.println("Treated Error");
      System.out.println(error);
    } catch (InputMismatchException error) {
      System.out.println("Invalid type error treated");
      //      System.exit(1);
    } finally {
      System.out.println("Code block finally executed");
    }

  }
}