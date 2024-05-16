import java.util.Scanner;

/**
 * The type Custom exception with uncheckd.
 */
public class CustomExceptionWithUncheckd {

  /**
   * The entry point of application.
   *
   * @param args the input arguments
   */
  public static void main(String[] args) {

    Scanner input = new Scanner(System.in);
    System.out.println("Enter your name:");
    String name = input.nextLine();

    try {

      showName(name);

    } catch (InvalidNameException error) {

      System.out.println("Name cannot contain numbers");
      
    }

  }

  /**
   * Show name.
   *
   * @param name the name
   */
  public static void showName(String name) {

    if (containsNumber(name)) {
      throw new InvalidNameException();
    }

    System.out.printf("Welcome, %s", name);

  }

  /**
   * Contains number boolean.
   *
   * @param word the word
   * @return the boolean
   */
  public static boolean containsNumber(String word) {

    for (char c : word.toCharArray()) {

      if (Character.isDigit(c)) {
        return true;
      }

    }

    return false;

  }
}