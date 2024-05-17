import org.junit.jupiter.api.Assertions;

import org.junit.jupiter.api.Test;

public class CalculadoraTest {

  @Test
  public void testeSomar() {
    Calculadora calculadora = new Calculadora();
    Assertions.assertEquals(34, calculadora.somar(32, 2));
  }

  @Test
  public void testeSubtrair() {
    Calculadora calculadora = new Calculadora();
    Assertions.assertEquals(1, calculadora.subtrair(3, 2));
  }
}