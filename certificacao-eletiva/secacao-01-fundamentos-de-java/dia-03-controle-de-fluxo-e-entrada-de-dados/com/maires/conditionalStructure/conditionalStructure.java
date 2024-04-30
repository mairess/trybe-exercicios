package com.maires.conditionalStructure;

public class conditionalStructure {
    public String seeStatus(double grade) {
//        double grade = 7.5;
        String result;

        if (grade >= 7) {
            result = "APPROVED";
        } else if (grade >= 6.0){
            result = "Do extra test";
        } else {
            result = "REPROVED";
        }

        return result;
    }

    public static void main(String[] args) {
        conditionalStructure structure = new conditionalStructure();

        double testGrade = 7.5;
        String status = structure.seeStatus(testGrade);

        System.out.println("Grade: " + testGrade + " - Status: " + status);
    }

}
