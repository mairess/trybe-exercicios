import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Teste da classe Calculadora")
public class CalculadoraTest {

  Calculadora calculadora = new Calculadora();

  @Test
  @DisplayName("Teste do método somar")
  public void testeSomar() {

    assertEquals(34, calculadora.somar(32, 2));

  }

  @Test
  @DisplayName("Teste do método subtrair")
  public void testeSubtrair() {

    assertEquals(1, calculadora.subtrair(3, 2));

  }

  @Test
  @DisplayName("Teste do método dividir")
  public void testeDividir() {

    assertEquals(8, calculadora.dividir(16, 2));

  }

  @Test
  @DisplayName("Teste da exceção do método dividir")
  public void testeDividirExcecao() {

    assertThrows(ArithmeticException.class, () -> {
      calculadora.dividir(3, 0);
    });

  }

}