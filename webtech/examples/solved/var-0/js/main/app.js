/*
 - funcția distance primește ca parametrii două array-uri
 - fiecare element poate apărea cel mult o dată într-un array
 - distanța dintre cele 2 array-uri este numărul de elemente diferite dintre ele
 - dacă parametrii nu sunt array-uri se va arunca o excepție ("InvalidType")
*/
function distance(first, second){
	if(!Array.isArray(first) || !Array.isArray(second)) {
	    throw new Error("InvalidType");
	}
    const uniqueFirst = [...new Set(first)];
    const uniqueSecond = [...new Set(second)];
    let diff = 0;
    for(const [elem, index] of uniqueFirst) {
        if(uniqueSecond.indexOf(elem) === -1) {
            diff += 1;
        } else {
            uniqueSecond.splice(index, 1);
        }
    }
    diff += uniqueSecond.length;
    return diff;
}


module.exports.distance = distance