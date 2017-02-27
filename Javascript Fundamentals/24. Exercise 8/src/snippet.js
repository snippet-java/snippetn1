//This function returns grade for a mark
function getGrade(mark) {
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

function printallgrades(item, index) {
    //Fill first blank with the name of the student
    //Fill second blank with Grade of a student.
    //To get the grade , call the getGrade by passing the mark
	console.log(____ + " "+_____);
}

var students = [['Betty', 80], ['David', 77], ['Celina', 88], ['Bush', 95], ['Aangelina', 68]];  

students.forEach(printallgrades);
