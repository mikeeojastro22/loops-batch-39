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
        examName: "1st Quarter",
        grade: 80
    }, 
    {
        examName: "2nd Quarter",
        grade: 70
    }, 
    {
        examName: "3rd Quarter",
        grade: 90
    },
    {
        examName: "4th Quarter",
        grade: 85
    }
];

let average = 0;
let totalGrades = 0;
// average: totalGrades/number of exams

for (let i = 0; i < studentGrade.length; i++){
    totalGrades += studentGrade[i].grade;
    console.log(`${studentGrade[i].examName} - ${studentGrade[i].grade}`);
}

average = totalGrades/studentGrade.length;
console.log(`The average grade is ${average}`);