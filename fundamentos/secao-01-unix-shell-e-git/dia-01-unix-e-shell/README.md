# <p align="center">DIA 1</p>


O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre `Unix` e `Shell`.


## Os requisitos são:
## <p align="center">Exercícios - Criação de arquivos e diretórios</p>

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado `unix_test` e navegue até ele.

2. Crie um arquivo de texto com o nome `trybe.txt`.

3. Crie uma cópia do arquivo `trybe.txt` com o nome `trybe_backup.txt`.

4. Renomeie o arquivo `trybe.txt`.

5. Dentro de `unix_tests`, crie um novo diretório chamado `backup`.

6. Mova o arquivo `trybe_backup.txt` para o diretório `backup`.

7. Dentro de `unix_tests`, crie um novo diretório chamado `backup2`.

8. Mova o arquivo `trybe_backup.txt` da pasta `backup` para a pasta `backup2`.

9. Apague a pasta `backup`.

10. Renomeie a pasta `backup2` para `backup`.

11. Veja qual é o path completo do diretório atual e liste todos os arquivos dentro dele.

12. Apague o diretório `backup`.

13. Limpe o terminal.

14. Mostre na tela as 5 primeiras skills do arquivo `skills.txt`.

15. Mostre na tela as 4 últimas skills do arquivo `skills.txt`.

16. Apague todos os arquivos que terminam em `.txt`.

## <p align="center">Exercícios - Manipulação e busca</p>

### Parte I

1. Mostre todo o conteúdo do arquivo `countries.txt` na tela.

2. Mostre o conteúdo de `countries.txt`, página por página, até encontrar a `Zambia`.

3. Mostre novamente o conteúdo de `countries.txt` página por página, mas agora utilize um comando para buscar por `Zambia`.

4. Busque por `Brazil` no `countries.txt`.

5. Busque novamente por `brazil`, mas agora utilize o lower case e não considere letras maiúsculas ou minúsculas.

### Parte II

6. Busque pelas frases que não contenham a palavra `fox`.

7. Conte o número de palavras do arquivo `phrases.txt`.

8. Conte o número de linhas do arquivo `phrases.txt`.

### Parte III

9. Crie os arquivos `empty.tbt` e `empty.pdf`.

10. Liste todos os arquivos do diretório `unix_tests_search`.

11. Liste todos os arquivos que terminem com `txt`.

12. Liste todos os arquivos que terminem com `tbt` ou `txt`.

13. Acesse o manual do comando `ls`.

## <p align="center">Exercícios - Comandos de input e output</p>

1. Crie a pasta `unix_tests_skills` e navegue até ela.

2. Crie um arquivo de texto pelo terminal com o nome `skills2.txt` e adicione os valores `Internet`, `Unix` e `Bash`, cada um em sua linha.

3. Adicione mais 5 itens à sua lista de _skills_ e, depois, imprima a lista ordenada no terminal.

4. Conte o número de linhas do arquivo `skills2.txt`.

5. Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt`. Ele deve conter as 3 primeiras skills em ordem alfabética.

6. Crie um novo arquivo chamado `phrases2.txt` pelo terminal e adicione algumas frases de sua escolha.

7. Conte o número de linhas que contêm as letras `br`.

8. Conte o número de linhas que não contêm as letras `br`.

9. Adicione dois nomes de países ao final do arquivo `phrases2.txt`.

10. Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` e `countries.txt.`

11. Ordene o arquivo `bunch_of_things.txt`.

## <p align="center">O despertar do terminal - Exercícios bônus</p>

1. Se você utiliza o Linux🐧, abra o terminal e execute o comando `sudo apt-get install cmatrix`. Para pessoas usuárias de macOS🍎, utilize `brew install cmatrix` no terminal. Depois, execute o comando `cmatrix`. Aperte `ctrl+c` para voltar ao terminal.

2. No sistema Linux, execute o comando `sudo apt-get install fortune`. No macOS🍎, execute `brew install fortune`. Após a instalação, crie um arquivo de texto chamado `fortune.txt` que contenha a sua sorte do dia. Utilize apenas uma linha de comando.

3. Conte o número de palavras que a frase da sua sorte do dia tem.

4. Execute o comando `sudo apt-get install sl` em um terminal Linux, ou `brew install sl` em um terminal macOS. Após a instalação, execute o comando `sl`. Agora, tente `sl -F`.

5. No sistema Linux, execute o comando `sudo apt-get install cowsay`, ou `brew install cowsay` no macOS. Após a instalação, execute o comando `cowsay` e algo que você queira falar. Agora, faça a vaquinha dizer a frase que está gravada no arquivo `fortune.txt`.

6. Descubra os fatores primos usando o comando `factor` e, em seguida, o número 42.

7. Veja como fica a sua sorte do dia ao contrário. Para isso, utilize o comando `rev`.

8. Execute o comando `telnet towel.blinkenlights.nl` e espere alguns segundos.