//students is a multi dimensional array. 
var students = [['Betty', 80], ['David', 77], ['Celina', 88], ['Bush', 95], ['Aangelina', 68]];  

var totalmarks = 0;  

//Iterate over students array
for (var i=0; i < students.length; i++) { 
  		//Add marks form each student to totalmarks
        totalmarks += students[i][1];  
}

//Calculate average marks by dividing total marks with length of students array
var avgmarks = (totalmarks/students.length);  

console.log("Average Marks of all the students: " + avgmarks);  
