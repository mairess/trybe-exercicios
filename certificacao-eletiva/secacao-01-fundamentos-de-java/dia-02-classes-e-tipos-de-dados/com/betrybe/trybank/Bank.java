package com.betrybe.trybank;

public class Bank {
    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000);
        account.showMessage();
        account.deposit(500);

        double convertedValue = account.convertCurrency(30, 5);
    }
}

