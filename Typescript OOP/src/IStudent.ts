interface IStudent{
  fname : string;
  lname : string;
  age : number;
  enroll(course:string):number;
  listcourse():string[];
}


class Student implements IStudent{
   fname!: string;
   lname!: string;
   age!: number;
   courses:string[] = [];
    constructor(public firstname:string,public lastname:string,public yourage:number){
    this.fname=firstname;
    this.lastname=lastname;
    this.age=yourage
    }
   enroll(course: string) {
    return this.courses.push(course);
   }
   listcourse() {
     return this.courses;
   }

   deleteCourse(course:string){
     return this.courses.filter(el => el != course);
   }}



var Student1 =new Student("","",22);
Student1.fname ="moka";
Student1.lname ="youm";
Student1.enroll("course 1");
Student1.enroll("course 2");
Student1.enroll("course 3");
console.log(Student1.listcourse())
console.log(Student1.deleteCourse("course 3"))
