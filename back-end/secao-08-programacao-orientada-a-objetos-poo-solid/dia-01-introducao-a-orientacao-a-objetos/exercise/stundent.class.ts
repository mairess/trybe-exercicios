import { v4 } from 'uuid';
import { Person } from "./person.class";

export class Student extends Person {
    enrollment: string;
    examsGrades: number[] = [];
    assignmentsGrades: number[] = [];

    constructor(
        name: string,
        birthDate: Date,
    ) {
        super(name, birthDate)
        this.enrollment = v4();
    }

    sumGrades() {
        const sumGrades = (grades: number[]) => {
            return grades.reduce((acc, current) => acc + current, 0)
        }

        const testGradeSum = sumGrades(this.examsGrades);
        const groupWorkGrades = sumGrades(this.assignmentsGrades);
        return testGradeSum+groupWorkGrades;
    }

    sumAverageGrade() {
        const gradeDivider = this.assignmentsGrades.length + this.examsGrades.length;
        return this.sumGrades() / gradeDivider;
    }

    generateEnrollment() {
        return this.enrollment
    }
}

const newStudent = new Student('João', new Date('Dec 05, 2000'));
console.log(newStudent);