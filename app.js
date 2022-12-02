function calculateAge(year)
{
    return 2022 - year
}

function LogInfoAbout (name, year){
    const age = calculateAge(year)
if (age >2020)


{
    console.log('Человек по имени: ' + name + ', сейчас имеет возраст: ' + age + ' лет')
} else {
    console.log('hello this is github')
}
}

LogInfoAbout('Mike', 1989)