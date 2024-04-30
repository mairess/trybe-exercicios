package com.maires.conditionalStructure;

import java.util.Random;

public class exampleDoWhile {
    public static void main(String[] args) {

        int attempts = 0;
        int getCall = 0;
        String log;

        do {
            log = "Calling selected candidate ...\n";
            getCall = new Random().ints(0, 2).findFirst().getAsInt();
            attempts += 1;
            System.out.println(getCall);
            System.out.println(attempts);
        } while (getCall == 0 && attempts < 3);

        log = "Candidate got the call: " + attempts;
        System.out.println(log);

    }
}
