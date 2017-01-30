"use strict";
class Person {
  constructor( first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName () {
      return this.firstName +" "+ this.lastName; 
  } 
}

var pers1 = new Person("Tom","Smith");
console.log("The full name of the person is: " + pers1.getFullName());

//Inheriting Person using extends keyword
class Student extends Person {
  constructor( first, last, studentid , mark) {
    super( first, last);
    this.studentid = studentid; 
    this.mark = mark;
  }
  // new method defined in this class
  getNameWithStudentid() {
    return super.getFullName() + "(" +
        this.studentid +")";
  }
  
  static getGrade(mark) {
			if (mark < 60){  
			  return "E";       
			} else if (mark < 70) {  
			  return "D";  
			} else if (mark < 80) {  
			  return "C";  
			} else if (mark < 90) {  
			  return "B";   
			} else if (mark <= 100) {  
			  return "A";  
			} else {
			  return "Z";
			}	
      }
}
//Create new object student1
var student1 = new Student("Elaine","Jones","A1223");

//Calling Static method getGrade
console.log("The grade for 90 marks is :"+Student.getGrade(90));

console.log("The student is: " + student1.getNameWithStudentid());

