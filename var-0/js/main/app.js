/*
 - funcția distance primește ca parametrii două array-uri
 - fiecare element poate apărea cel mult o dată într-un array; orice apariții suplimentare sunt ignorate 
 - distanța dintre cele 2 array-uri este numărul de elemente diferite dintre ele
 - dacă parametrii nu sunt array-uri se va arunca o excepție ("InvalidType")
*/
/*
 - the distance function receives as parameters two arrays
 - each element can appear in each array at most once; any duplicates are ignored
 - the distance between the 2 arrays is the number of different elements between them
 - if the parameters are not arrays an exception is thrown ("InvalidType")
*/

function distance(first, second){
	//TODO: implementați funcția
	// TODO: implement the function
	
	//verific daca e ob array:cerinta 1
	if(!Array.isArray(first) || !Array.isArray(second)){
		throw new Error("InvalidType!");
	}
	
	const uniqueFirst=[...new Set(first)];
	const uniqueSecond=[...new Set(second)];
	let diff=0;
	// itere\ pin primul arr
	for(const [element, index] of uniqueFirst){
		if(uniqueSecond.indexOf(element)===-1){
			//inseamna ca nu e inarray si implemenrez diferenta
			diff++;
		}else{
			//daca se afla si in ak doilea arrya ii dau remove si imi raman elem care nu sunt si in primul
			uniqueSecond.splice(index,1);
			// de la poz index sterg un element
			
		}
	}
	//impl lungimea lui sec
	diff+=uniqueSecond.length;
	return diff;
	
	
}


module.exports.distance = distance