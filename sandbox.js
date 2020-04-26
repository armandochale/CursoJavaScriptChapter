//let age = 25;
//let year = 2019;

//log things to console
//console.log(age, year);

/*age = 30;
console.log(age);

const points = 100;
console.log(points);*/

//var score = 75;
//console.log(score);

// strings
//console.log('Hello world');

//let email = 'chaleArmando@gmail.com';
//console.log(email);

//String concatenation
//let firstName = 'Armando';
//let lastName = 'Chale';

//let name = firstName + ' ' + lastName;
//console.log(name);

//getting characters
//console.log(name[0]);

//string length
//console.log(name.length);

//string methods
//console.log(name.toUpperCase());
//let result = name.toLowerCase();
//console.log(result, name);

//let index = email.indexOf('@');
//console.log(index);

//common string method

//let result1 = email.lastIndexOf('n');

//let result1 = email.slice(0,5);

//let result1 = email.substr(4,10);

//let result1 = email.replace('m','q');

//console.log(result1);

/*let radius = 10;
const pi = 3.14;*/

//console.log(radius, pi);

//math operators +, -, *, /, ** , %
//console.log(10 / 2);
//let result1 = radius % 4;
//let result1 = pi *radius **3;

//order of operation - B I D M A S

//let result = 4 * (10-5)**2;

//console.log(result);

//let number = 10;

//number = number + 1;
//number++;
//console.log(number);
//number--;
//console.log(number);

//number += 10;
//console.log(number);
//number -=5;
//console.log(number);
//number *= 2;
//console.log(number);
//number /= 2;
//console.log(number);
 
//NaN - not a number

//console.log(5 / 'hello');
//console.log(5 * 'hello');

//let result1 = 'the block has ' + number + ' number';
//console.log(result1);

//template strings
/*const book = 'How to kill a mockingbird';
const author = 'Shakespeare';
const pages = 524;*/

//concatenation way
//let result = 'The book ' + book + ' by ' + author +' has ' + pages + ' pages';
//console.log(result);

// template string way
/*let result = `The book ${book} by ${author} has ${pages} pages`;
console.log(result);*/

//creating html templates
/*let html = `
    <h2>${book}</h2>
    <p>By ${author}</p>
    <span>Has ${pages} pages</span>
`;
console.log(html);*/

//let person = ['Sheyla', 'Jhoedy', 'Adrian'];

/*console.log(person);
console.log(person[1]);
person[1] = 'Artemio';
console.log(person[1]);*/

//let ages = [15,40,20,58];
//console.log(ages[2]);

//let values = ['Sheyla', 'Jhoedy', 10, 45];
//console.log(values);

//console.log(person.length);

//array methods

//let result = person.join(',');
//console.log(result);
//let result = person.indexOf('Sheyla');
//console.log(result);
//let result = person.concat(['Sheyla','Jhoedy']);
//console.log(result);
//let result = person.push('Artemio');
//console.log(result);
//let result = person.pop();
//console.log(result);

/*let age;
console.log(age, age + 3, `the age is ${age}`);

let age1 = null;
console.log(age1, age1 + 3, `the age is ${age1}`);*/

//booleans & comparisons
//console.log(true, false, 'true', 'false');

//methods can return boolean
//let email = 'chalearmando@gmail.com';
//let names = ['Sheyla', 'Jhoedy', 'Adrian'];

//let result = email.includes('!');
//console.log(result);
//let result = names.includes('Adrian');
//console.log(result);

//comparison operators
//let value = 20;

/*console.log(value == 20);
console.log(value == 15);
console.log(value != 15);
console.log(value > 25);
console.log(value < 25);
console.log(value <= 20);
console.log(value >= 20);*/

/*let name = 'Adrian';
console.log(name == 'adrian');
console.log(name == 'Adrian');
console.log(name >'Sheyla');
console.log(name > 'Sheyla');
console.log(name > 'Jhoedy');*/

//loose comparison (different types can still be equal)

/*console.log(value == 20);
console.log(value == '20');
console.log(value != 20);
console.log(value != '20');*/

//strict comparison (different types cannot be equal)

/*console.log(value === 20);
console.log(value === '20');
console.log(value !== 20);
console.log(value !== '20');*/

//type conversion
//let value = '100';

/*value = Number(value);
console.log(value + 1);
console.log(typeof value);*/

//let result = Number('Hello world');
//console.log(result);

//let result = String(50);

//let result = Boolean(0);

let result = Boolean('');

console.log(result, typeof result);