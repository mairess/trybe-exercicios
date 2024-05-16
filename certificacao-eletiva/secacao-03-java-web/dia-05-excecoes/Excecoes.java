/**
 * The type Excecoes.
 */
public class Excecoes {

  /**
   * The entry point of application.
   *
   * @param args the input arguments
   */
  public static void main(String[] args) {

    String word = null;

    try {

      Integer result = 2 / 0;
      System.out.println("Did it work?");
      System.out.println(result);

    } catch (ArithmeticException error) {

      System.out.println("Ops... Cannot divide by 0");
      System.out.println(error);

    }

  }
}