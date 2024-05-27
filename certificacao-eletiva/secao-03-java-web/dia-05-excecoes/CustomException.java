import java.util.Scanner;

public class CustomException {

  public static void main(String[] args) {

    System.out.println(
        "To complete this operation you need to be of legal age. Please enter your age:"
    );

    Scanner input = new Scanner(System.in);
    int age = input.nextInt();

    try {

      isUndeLegalAge(age);
      System.out.println("Purchase confirmed!");

    } catch (UnderAgeException error) {

      System.out.println("Recused person under legal age!");

    } finally {

      input.close();

    }
  }

  private static boolean isUndeLegalAge(int age) throws UnderAgeException {
    if (age < 18) {

      throw new UnderAgeException();

    } else {

      return false;

    }
  }
}