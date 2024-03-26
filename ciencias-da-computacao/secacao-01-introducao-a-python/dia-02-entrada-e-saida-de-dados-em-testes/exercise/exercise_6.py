# 🚀 Exercício 6:
# Realize esse exercício utilizando TDD: implemente os testes e depois a função 🧪

# Faça uma função que valide um e-mail, lançando uma exceção quando o valor for inválido. Endereços de e-mail válidos devem seguir as seguintes regras:

# Devem seguir o formato nomeusuario@nomewebsite.extensao;

# O nome de usuário deve conter somente letras, dígitos, traços e underscores (_);

# O nome de usuário deve iniciar com uma letra;

# O nome do website deve conter somente letras e dígitos;

# O tamanho máximo da extensão é de 3 caracteres.

# 🦜 As funções isalpha, isdigit e isnumeric podem ser utilizadas para verificar se uma letra ou palavra são compostas de somente caracteres ou dígitos. Exemplo: "1".isalpha() -> False , "a".isalpha() -> True, "123".isnumeric() -> True.

import pytest


def validate_email(email):
    index = 0
    if not email[index].isalpha():
        raise ValueError("Username should start with a letter")

    # validate username
    while email[index] != "@" and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit() and letter not in ("_", "-"):
            raise ValueError(
                "Username should contain only letters, " "digits, dashes or underscores"
            )
        index += 1
    index += 1  # @
    # validate website
    while email[index] != "." and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError("Website should contain only letters, and digits")
        index += 1

    index += 1  # .
    # validate extension
    counter = 0
    while index < len(email):
        counter += 1
        index += 1
    if counter > 3:
        raise ValueError("Extension maximum length is 3")
    return None


def test_username_can_only_contain_letters():
    assert validate_email("aaaa@nomewebsite.ext") is None


def test_username_can_contain_letters_and_digits():
    assert validate_email("a1993@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_and_dashes():
    assert validate_email("aa-a@nomewebsite.ext") is None


def test_username_can_contain_letters_digits_dashes_and_underscores():
    assert validate_email("a_a1a-a@nomewebsite.ext") is None


def test_username_should_starts_with_letter():
    assert validate_email("a@nomewebsite.ext") is None


def test_username_when_doesnt_start_with_letter_raise_exception():
    with pytest.raises(ValueError):
        validate_email("1@nomewebsite.ext")


def test_username_is_invalid_raise_exception():
    with pytest.raises(ValueError):
        validate_email("a%a@nomewebsite.ext")


def test_website_contain_only_letters_and_digits():
    assert validate_email("abc@website123.com") is None


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("abc@website!123.com")


def test_extension_should_contain_only_three_chars():
    assert validate_email("abc@website123.com") is None


def test_extension_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("abc@website123.pyth")
