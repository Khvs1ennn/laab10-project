class Grade {
    constructor(subject, score) {
        this.subject = subject;
        this.score = score;
    }
}
class Student {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        let total = 0;
        for (const g of this.grades) {
            total += g.score;
        }
        return total / this.grades.length;
    }
}
const student1 = new Student('Nasaa');
student1.addGrade(new Grade('Math', 85));
student1.addGrade(new Grade('English', 90));
student1.addGrade(new Grade('programming', 78));

const student2 = new Student('Enne');
student2.addGrade(new Grade('Math', 80));
student2.addGrade(new Grade('English', 99));
student2.addGrade(new Grade('programming', 92));

const student3 = new Student('Namuunna');
student3.addGrade(new Grade('Math', 88));
student3.addGrade(new Grade('English', 76));
student3.addGrade(new Grade('programming', 70));

const students = [student1, student2, student3];
let topStudent = students[0];
for (let st of students) {
    if (st.getAverageGrade() > topStudent.getAverageGrade()) {
        topStudent = st;
    }
}
console.log("Хамгийн өндөр дундаж оноотой оюутан: " + topStudent.name + " with an average grade of " + topStudent.getAverageGrade().toFixed(2));