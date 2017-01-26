var example = 'Mr Blue has a blue house and a blue car';
console.log("Example: "+example);

//Now we are replacing the part of String
result1 = example.replace('house', 'boat');
console.log("result1: "+result1);

//One can user advanced regular expressions with options
//Now we are replacing all the case sensitive 'blue'
result2 = example.replace(/blue/g, "red"); // '/g' means global which replaces every instance.
console.log("result2: "+result2);

//Now we are replacing all the case insensitive 'blue'
result3 = example.replace(/blue/gi, "red");
console.log("result3: "+result3);

//Using charAt()
console.log("First character in 'example' is :"+example.charAt(0));
console.log("Fourth character in 'example' is :"+example.charAt(4));
console.log("Last character in 'example' is :"+example.charAt(example.length-1));

//Using Substring.
//From 1st character to 4th character
console.log("Substring from first to fourth character "+example.substring(0,5));
//End index is not provied
console.log("Substring from fourth character to the end"+example.substring(5));
//Start index is bigger than End index.
//In these cases , the behaviour is similar to swapping the start and end indexes
console.log("Substring from first to fourth character "+example.substring(5,0));

//Using indexOf() method.
console.log("First occurance of 'r' at :"+example.indexOf("r")); //First occurance of 'r'
console.log("First occurance of 'Blue' at :"+example.indexOf("Blue"));
console.log("First occurance of 'Green' at :"+example.indexOf("Green"));//Green is not part of 'example'
