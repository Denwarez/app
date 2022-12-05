/*const FirstName = 'Денис'
const isprogrammer = true //boolean
const withNum5 = '5'

//2 глава

let age = prompt ("Сколько вам лет");
let name = prompt ("Ваше имя")

alert("Вас зовут: " + name + " И вам: " + age)


f

let currentYear = 1000
const birthYear = 1993
const a = 10
const b = 20
let c = 32

//c = c + a

/*c+=a
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(++currentYear)
console.log(--currentYear)
console.log(c)

console.log(typeof age)
console.log(typeof FirstName)
console.log(typeof isprogrammer)
console.log(null)*/


/*const isProgrammer = true
const name = "Dnis"
const age = 26 

let n = "Denis"
let f = "Demidov"
let fullName = n + " " + f
console.log(fullName)

const a = 10

console.log(a)

const obj = 
{
    a:5
}

obj.a = 6

console.log(obj)


/*console.log(typeof age)
console.log(typeof name)
console.log(typeof isProgrammer)*/


/*приоритеты операторов*/



/*const fullAge = 26
const birthYear = 1993
const currentYear = 2020

const isFullAge = currentYear - birthYear >= fullAge //26 >=27

console.log(isFullAge)
*/

/*6 условные операторы*/


/*const courseStatus  = "fail" // ready, fail, pending

if (courseStatus === 'ready')
{
console.log('курс готов')
}
else if (courseStatus ==='pending')
{
    console.log('все готово')
}
else {   


    d
    console.log('условие не сработало')
}
*/

/*const isReady = true

if(isReady)
{
    console.log('🤑')
}
else{
    console.log('😅 ')
}

const isReade = true

if (isReade)
{
    console.log('d')
}
else{
    console.log('d')
}


/*const num1 = 42 //number
const num2 = '42' //string

console.log(num1 === num2)*/

//{7} блок булевая логика

//https://developer.mozilla.org.cach3.com/ru/docs/Web/JavaScript/Reference/Operators/Logical_Operators
 

// {8} функции


/*function calculateAge(year)
{
    return 2020 - year
}

function LogInfoAbout (name, year){
    const age = calculateAge(year)
if (age >2020)
{
    console.log('Человек по имени: ' + name + ', сейчас имеет возраст: ' + age + ' лет')
} else {
    console.log('Этоо будущее')
}
}

//console.log('Человек по имени: ' + name + ', сейчас имеет возраст: ' + age + ' лет')

 LogInfoAbout('Mike', 1992)
 LogInfoAbout('Елена', 1995)
 LogInfoAbout('Елена', 2022)



 function poschitaemSummu(god)
 {
    return 2020 + god
 }
 function Uznaem (imya, god){
 const vozrast = poschitaemSummu(god)
 if(vozrast > 2020){
    console.log('uuuuuu')
 } else 
 {
    console.log('Человек по имени:')
 }
 }
 Uznaem('sdf', 52)
*/

//{9} Массивы 

//const cars = ['mazda', 'ford', 'mercedes']
//const cars = new Array('mazda', 'ford', 'mercedes')

//cars[0]= "porsche"
//console.log(cars)


//const cars = ['one','two','three','four','five','six']
//console.log(cars)


// 10 циклы
/*
const cars = ['mazda', 'ford', 'mercedes']

for (let i = 0; i < cars.length; i++) {
console.log(cars)
}
*/
//11 обьекты


const person = {
    firstName: "Denis",
    LastName: "Demidov",
    year: 1992,
    Languages: ['ru', 'en'],
    hasWife: false,
    isProgrammer: false,
    greet: function()
    {
    console.log('привет')
    }
    }
    
    
    
    console.log(person.firstName)
    console.log(person['LastName'])
    const key = 'year'
    console.log(person[key])
    person.hasWife = true
    console.log(person)
    person.isProgrammer = true