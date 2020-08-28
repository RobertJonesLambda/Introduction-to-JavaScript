/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 18


console.log(votingAge >= 18)


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let pizzaSlice = 12
let noPizza = (pizzaSlice <= 6) ? "Pizza is good" : "Pizza is bad";
console.log(noPizza);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let party = '1999'
let integer = parseInt('1999', 1999);

console.log(integer)



//Task d: Write a function to multiply a*b 

function multiply(a,b){
    return (a*b);
} 
let answer = multiply(5,60);
console.log(answer)


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let age = 38

function dogYears(a,b ){
    return (age*7);
}
let dogs = dogYears(age, 7);
console.log(dogs)



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(dogYears, dogWeight){
    if (dogYears >= 1 && dogWeight <6) {
        return dogWeight * .05;
    //adult dogs    
    } else if (dogYears >= 1 && dogWeight > 6 && dogWeight < 11)
        {return dogWeight * .04}
    else if (dogYears >= 1 && dogWeight <= 11 || dogWeight === 15 )
        {return dogWeight * .03}
    else if (dogYears >= 1 && dogWeight > 15)
       { return dogWeight * .02}
    //puppies
    
}

console.log(dogFeeder(1,15));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

//choose RPS
function game(pick){
    let choice = Math.ceil(Math.random() * 3 )

    if (choice === 1) {
        choice = 'rock'
    } else if (choice === 2) {
        choice = 'paper'
    } else {
        choice = 'scissors'
    }
    console.log(choice)
    pick = pick.toLowerCase();
    console.log(pick)
    if (choice === pick){
        return 'tie';
    } else if (choice === 'rock'){
       if (pick === 'paper'){
           return 'win';
       } else{
           return 'lose';
       }
      
    } else if (choice === 'scissors') {
        if (pick === 'paper') {
            return 'lose';
        } else {
            return 'win';
        }
         
    } else if (choice === 'paper') {
        if (pick === 'rock') {
            return 'lose';
        } else {
            return 'win';
        }
    }    
}
console.log(game('ScIssORS') )

  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function conversion (km){
    let miles = km * .621371 
    return miles
}
console.log(conversion(2))


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function metric(feet){
    let CM = feet * 30.48
    return CM
}
console.log(metric(3))


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(num){
    for (i = num ; i > 0  ; i--){
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer, take one down pass it around, ${i-1} bottles of beer on the wall`)
    } 
}

annoyingSong(5)

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function judge(percent){
    if (percent >= 90){
        return 'A'
    } else if (percent >= 80){
        return 'B'
    } else if (percent >=70){
        return 'C'
    } else if (percent >=60){
        return 'D'
    } else {
        return 'F'
    }
    
}
console.log(judge(92))
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





