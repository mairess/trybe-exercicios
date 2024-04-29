package com.betrybe.trybank;

import java.awt.*;

public class BankAccount {
    double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    void showMessage() {
        System.out.println("Bank account accessed!");
    }

    void deposit(double amount) {
        this.balance += amount;
    }

    double convertCurrency(float total, float exchangeRate) {
        return total * exchangeRate;
    }
}
