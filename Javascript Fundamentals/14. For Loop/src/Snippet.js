var numRows = 10;

//Printing the 'numRows' rows
for(var currentRow = 1 ; currentRow <= numRows ; currentRow++){
	// * is  appended to the variable stars for every iteration
	var stars = "";
	
	//The number of stars in each row is same the the row number
	for(var numStars = 1 ; numStars <= currentRow ; numStars++) {
		stars = stars + '*';
	}
	
	//to print new line
	console.log(stars);
} 
