<<<<<<< HEAD
/* Nomor1
const calculateAge= (birthYear) => {
	return 2019 - birthYear;
}
 
const yearUntilRetirement= (object) => {
	var age = calculateAge(object.year);
	var retirement = 60 - age;
   
	if(retirement > 0){
    	console.log(`${object.firstName} retires in ${retirement}years.`);
	} else {
    	console.log(`${object.firstName} is already retired.`);
	}
}
 
yearUntilRetirement({year: 1987, firstName: 'John'});
*/

/*No2

const addNumber = (...numbers) => {
    let sum = 0;
    numbers.forEach((el) => {
        sum = sum +numbers;
    })
    return sum;
}
console.log(addNumber(1,2,3,4,5,6,7));
*/

/*No3

const phi = 3.14;
const power = 2;
const radius = [7, 21];

const calculateArea = (obj) => {
  return phi * Math.pow(obj.radius, obj.power);
};

const area21 = calculateArea({radius: radius[0], power: 2 });
const area7 = calculateArea({radius: radius[1], power: 2 });

console.log(`area with 21 radius: ${area21} , and area with 7 radius: ${area7}`);
*/



//No4
const makeAjaxRequest = (url, method) => {
    if(!method){
        method = 'GET'
     }
    console.log(url, method);
}
makeAjaxRequest('www.google.com');
=======
/* Nomor1
const calculateAge= (birthYear) => {
	return 2019 - birthYear;
}
 
const yearUntilRetirement= (object) => {
	var age = calculateAge(object.year);
	var retirement = 60 - age;
   
	if(retirement > 0){
    	console.log(`${object.firstName} retires in ${retirement}years.`);
	} else {
    	console.log(`${object.firstName} is already retired.`);
	}
}
 
yearUntilRetirement({year: 1987, firstName: 'John'});
*/

/*No2

const addNumber = (...numbers) => {
    let sum = 0;
    numbers.forEach((el) => {
        sum = sum +numbers;
    })
    return sum;
}
console.log(addNumber(1,2,3,4,5,6,7));
*/

/*No3

const phi = 3.14;
const power = 2;
const radius = [7, 21];

const calculateArea = (obj) => {
  return phi * Math.pow(obj.radius, obj.power);
};

const area21 = calculateArea({radius: radius[0], power: 2 });
const area7 = calculateArea({radius: radius[1], power: 2 });

console.log(`area with 21 radius: ${area21} , and area with 7 radius: ${area7}`);
*/



//No4
const makeAjaxRequest = (url, method) => {
    if(!method){
        method = 'GET'
     }
    console.log(url, method);
}
makeAjaxRequest('www.google.com');
>>>>>>> 2983a4013952d2ac06f5089fb1fa008e4dadee3c
