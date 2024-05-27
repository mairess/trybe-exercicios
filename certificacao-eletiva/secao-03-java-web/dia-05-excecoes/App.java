import java.util.Optional;

/**
 * The type App.
 */
public class App {

  /**
   * The entry point of application.
   *
   * @param args the input arguments
   */
  public static void main(String[] args) {

    Person person = new Person("Bob");
    Optional<Person> optional = Optional.ofNullable(person);

    if (optional.isPresent()) {
      System.out.println("Person exists!");
      System.out.println(optional.get().getName());
    } else {
      System.out.println("Person does not exist!");
    }
  }

  /**
   * Gets thename.
   *
   * @param optional the optional
   * @return the thename
   */
  String getThename(Optional<Person> optional) {
    return optional.map(Person::getName).orElse("Absent person");
  }
}