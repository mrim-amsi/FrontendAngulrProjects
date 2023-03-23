var Student = /** @class */ (function () {
    function Student(firstname, lastname, yourage) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.yourage = yourage;
        this.courses = [];
        this.fname = firstname;
        this.lastname = lastname;
        this.age = yourage;
    }
    Student.prototype.enroll = function (course) {
        return this.courses.push(course);
    };
    Student.prototype.listcourse = function () {
        return this.courses;
    };
    Student.prototype.deleteCourse = function (course) {
        return this.courses.filter(function (el) { return el != course; });
    };
    return Student;
}());
var Student1 = new Student("", "", 22);
Student1.fname = "moka";
Student1.lname = "youm";
Student1.enroll("course 1");
Student1.enroll("course 2");
Student1.enroll("course 3");
console.log(Student1.listcourse());
console.log(Student1.deleteCourse("course 3"));
