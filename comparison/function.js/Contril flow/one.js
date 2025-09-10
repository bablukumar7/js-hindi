// Function to check grade based on marks
function checkGrade(marks) {
    if (marks >= 90) {
        return "A+";
    } else if (marks >= 75) {
        return "A";
    } else if (marks >= 50) {
        return "B";
    } else if (marks >= 33) {
        return "C";
    } else {
        return "Fail";
    }
}

// Example students with marks
const students = [
    { name: "Bablu", marks: 92 },
    { name: "Ravi", marks: 68 },
    { name: "Sita", marks: 45 },
    { name: "Aman", marks: 20 }
];

// Loop through students and check grade
students.forEach(student => {
    let grade = checkGrade(student.marks);

    // Switch example
    switch (grade) {
        case "A+":
        case "A":
            console.log(`${student.name} passed with excellent grade: ${grade}`);
            break;
        case "B":
        case "C":
            console.log(`${student.name} passed with grade: ${grade}`);
            break;
        default:
            console.log(`${student.name} has failed. 😢`);
    }
});
