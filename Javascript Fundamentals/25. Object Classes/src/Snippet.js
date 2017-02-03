"use strict";
class Student {
  //constructor to initialize the variables
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
//Create new instance 'student1' for the 'Student' class
var student1 = new Student("Tom","Smith");
console.log("firstName of student1 is: "+student1.firstName);
console.log("lastName of student1 is: "+student1.lastName);
