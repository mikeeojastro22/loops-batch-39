/*
    Case 2: GPA Calculator
    You are asked to develop a grading calculator for the professor in a university.
    This system will compute the average points of the exams of a student. 
    Print the exam and the grades of the student. 
*/

/*
    Exam - Grade
    1st Quarter - 80
    2nd Quarter - 70
    3rd Quarter - 90
    4th Quarter - 85
*/

const studentGrade = [
    {
        exam: "1st Quarter",
        grade: 80
    },
    {
        exam: "2nd Quarter",
        grade: 70
    },
    {
        exam: "3rd Quarter",
        grade: 90
    },
    {
        exam: "4th Quarter",
        grade: 85
    },
];

// average: totalGrades/number of exams

let average = 0;
let totalGrades = 0;

for(let i = 0; i < studentGrade.length; i++){
    totalGrades += studentGrade[i].grade;
    console.log(`${studentGrade[i].exam} - ${studentGrade[i].grade}`);
}

average = totalGrades/studentGrade.length;
console.log(`The average grade is ${average}`);