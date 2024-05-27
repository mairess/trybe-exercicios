package com.maires.repetitionStructure;

public class repetitionStructure {
    public void logNumbers() {
        int number;
        String log;

        for (number = 1; number <= 10; number +=1) {
            log = "The actual number is: " + number + "\n";
            System.out.println(log);
        }
    }

    public void logStudentList() {
        String[] students = {"MARCOS", "ALINE", "LUCAS", "PATRICIA"};
        String log;

        int totalStudents = students.length;

//        log = "Attendance list has " + totalStudents + " students\n";

        int registration;

        for (int position = 0; position < totalStudents; position++) {
            registration = position + 1;
            log = "Registration: " + registration + " Student: " + students[position]+ "\n";
            System.out.println(log);
        }


    }

    public static void main(String[] args) {
        repetitionStructure structure = new  repetitionStructure();

        structure.logNumbers();

        structure.logStudentList();
    }
}
