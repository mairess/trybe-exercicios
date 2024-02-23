export class Student {
    registration: string;
    name: string;
    testGrades: number[];
    groupWorkGrades: number[];

    constructor(
        registration: string,
        name: string,
        testGrade: number[],
        groupWorkGrade: number[],
    ) {
        this.registration = registration;
        this.name = name;
        this.testGrades = testGrade;
        this.groupWorkGrades = groupWorkGrade;
    }

    sumGrades() {
        const sumArray = (grades: number[]) => {
            return grades.reduce((acc, current) => acc + current, 0)
        }

        const testGradeSum = sumArray(this.testGrades);
        const groupWorkGrades = sumArray(this.groupWorkGrades);
        return testGradeSum+groupWorkGrades;
    }

    average() {
        const gradeDivider = this.groupWorkGrades.length + this.testGrades.length;
        return this.sumGrades() / gradeDivider;
    }
}

const newStudent = new Student('as465asd65a4s', 'Wagner', [10, 8, 8, 9], [7, 9]);
// console.log(newStudent.average());