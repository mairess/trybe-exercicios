package com.betrybe.meuprojetomaven;

import com.google.common.base.Joiner;

/**
 * The type Principal.
 */
public class Principal {


    /**
     * The entry point of application.
     *
     * @param args the input arguments
     */
    public static void main(String[] args) {
        String result = Joiner.on(", ").skipNulls().join("Olá", null, "mundo");
        System.out.println(result);
    }
}
