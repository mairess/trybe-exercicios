import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Teste da classe Calculadora")
public class CalculadoraTest {

  @Test
  @DisplayName("Teste do método somar")
  public void testeSomar() {

    Calculadora calculadora = new Calculadora();
    assertEquals(34, calculadora.somar(32, 2));

  }

  @Test
  @DisplayName("Teste do método subtrair")
  public void testeSubtrair() {

    Calculadora calculadora = new Calculadora();
    assertEquals(1, calculadora.subtrair(3, 2));

  }

}