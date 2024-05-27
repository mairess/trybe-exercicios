/**
 * The type Null pointer exception.
 */
public class NullPointerException {

  /**
   * The entry point of application.
   *
   * @param args the input arguments
   */
  public static void main(String[] args) {

    try {
      printLength(null);
    } catch (java.lang.NullPointerException error) {
      System.out.println("It cannot get word length " + error.getMessage());
    }
  }

  public static void printLength(String word) {
    System.out.println(word.length());
  }
}