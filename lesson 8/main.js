//lesson 8 
//part 1 array 

const numbers = [4, -2, 15, 8, -7, 23, 1];
const doubled = numbers.map(n => n * 2);
const nonNegative = numbers.filter(n => n >= 0);
const firstGreaterThan10 = numbers.find(n => n > 10);
const product = numbers.reduce((total, n) => total * n, 1);
const hasNegative = numbers.some(n => n < 0);
const sortedNumbers = numbers.toSorted((a, b) => a - b);

console.log(doubled);
console.log(nonNegative);
console.log(firstGreaterThan10);
console.log(product);
console.log(hasNegative);
console.log(sortedNumbers);

// part 2 object
const person = {
    firstname:"Tupac",
    lastname: "Shakur",
    age: "42",
    hobbies: ["reading", "gaming", "traveling"],
    address: {
        city:"Nairobi",
        country: "Kenya",
    }
};
person.phoneNumber = "0712345678";
delete person.phoneNumber;
const{firstname, hobbies} = person;
const marks = {
    math: 85,
    english: 88,
    science: 92,
};
for (const [subject, score] of Object.entries(marks)) {
    console.log(`${subject}: ${score}`);
}

console.log(person.address.city);
console.log(person["lastname"]);
console.log(person.phoneNumber); // undefined
console.log(firstname);
console.log(hobbies);

// part 3 array of objects
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];
const names = students.map(student => student.name);
const highGrades = students.filter(student => student.grade > 80);
const charlie = students.find(student => student.name === "Charlie");
const totalGrades = students.reduce(
    (total, student) => total + student.grade, 0
);
const averageGrade = totalGrades / students.length;
const csStudents = students.filter(student => student.major === "CS");
const sortedStudents = students.toSorted(
    (a, b) => b.grade - a.grade
);

console.log(names);
console.log(highGrades);
console.log(charlie);
console.log(averageGrade);
console.log(csStudents);
console.log(sortedStudents);

// PART 4 

const postsJson =
    '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';
const posts = JSON.parse(postsJson);
const publishedPosts = posts.filter(post => post.published);
const sortedPosts = [...publishedPosts].sort((a, b) => b.likes - a.likes);
const postSummaries = sortedPosts.map(
    post => `${post.title} (${post.likes} likes)`
);
const publishedPostsJson = JSON.stringify(publishedPosts);

console.log("Before parsing:", typeof postsJson);
console.log("After parsing:", typeof posts);
console.log("Published posts:", publishedPosts);
console.log("Sorted posts:", sortedPosts);
console.log("Post summaries:", postSummaries);
console.log("Published posts as JSON:", publishedPostsJson);

// PART 5 - MINI-PROJECT: Student Grade Tracker

const gradeTracker = {
    students: [],

    // Add a student and their grades
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // Find a student by name
    getStudent(name) {
        return this.students.find(
            student => student.name === name
        ) || null;
    },

    // Calculate a student's average across all subjects
    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) {
            return null;
        }

        const grades = Object.values(student.grades);

        if (grades.length === 0) {
            return 0;
        }

        const total = grades.reduce(
            (sum, grade) => sum + grade,
            0
        );

        return Number((total / grades.length).toFixed(2));
    },

    // Calculate the average for a subject across all students
    getSubjectAverage(subject) {
        const grades = this.students
            .filter(student =>
                Object.prototype.hasOwnProperty.call(
                    student.grades,
                    subject
                )
            )
            .map(student => student.grades[subject]);

        if (grades.length === 0) {
            return 0;
        }

        const total = grades.reduce(
            (sum, grade) => sum + grade,
            0
        );

        return Number((total / grades.length).toFixed(2));
    },

    // Find the student with the highest average
    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }

        return this.students.reduce((top, student) => {
            return this.getStudentAverage(student.name) >
                this.getStudentAverage(top.name)
                ? student
                : top;
        });
    },

    // Find students whose average is below 70
    getStrugglingStudents() {
        return this.students.filter(student =>
            this.getStudentAverage(student.name) < 70
        );
    },

    // Convert a score into a letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    // Generate a multi-line report card
    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) {
            return `Student not found: ${name}`;
        }

        const average = this.getStudentAverage(name);

        const subjectLines = Object.entries(student.grades)
            .map(([subject, score]) =>
                `${subject}: ${score} (${this.getLetterGrade(score)})`
            );

        return [
            `Report Card: ${student.name}`,
            ...subjectLines,
            `Average: ${average}`,
            `Overall Grade: ${this.getLetterGrade(average)}`
        ].join("\n");
    }
};


// TESTS

gradeTracker.addStudent("Alice", {
    math: 95,
    english: 88,
    science: 92
});

gradeTracker.addStudent("Bob", {
    math: 72,
    english: 85,
    science: 78
});

gradeTracker.addStudent("Charlie", {
    math: 60,
    english: 65,
    science: 58
});

console.log("Alice's average:",
    gradeTracker.getStudentAverage("Alice"));

console.log("Math average:",
    gradeTracker.getSubjectAverage("math"));

console.log("Top student:",
    gradeTracker.getTopStudent().name);

console.log("Struggling students:",
    gradeTracker.getStrugglingStudents().map(student => student.name));

console.log("Alice's letter grade:",
    gradeTracker.getLetterGrade(91.67));

console.log(gradeTracker.generateReportCard("Alice"));