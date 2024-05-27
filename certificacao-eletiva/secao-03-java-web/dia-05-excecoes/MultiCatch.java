import java.util.Scanner;

/**
 * The type Multi catch.
 */
public class MultiCatch {

  /**
   * The entry point of application.
   *
   * @param args the input arguments
   */
  public static void main(String[] args) {

    int[] numbers = new int[10];
    Scanner input = new Scanner(System.in);

    try {

      System.out.println("Type a index number you want to access ");
      int index = input.nextInt();

      numbers[index] = 10;

      numbers[index] = 2 / 0;
      System.out.println(numbers);

    } catch (java.lang.ArrayIndexOutOfBoundsException error) {

      System.out.println("Ops... This position does not exist!");

    } catch (ArithmeticException error) {

      System.out.println("Ops... Cannot divide by 0!");

    }
  }
}