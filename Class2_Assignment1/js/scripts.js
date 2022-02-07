//1. Condition

let check_var = 10;
if (check_var % 2 === 0 ) {
        console.log("This is an even number.");
    } else {
        console.log("This is an odd number.");
}

//2.Conditions/Random:

let rolled = Math.ceil(Math.random() * 6);

console.log(rolled);

switch (rolled) {
    case (1):
        console.log("You rolled a one!");
        break;
    case (2):
        console.log("You rolled a two!");
        break;
    case (3):
        console.log("You rolled a three!");
        break;
    case (4):
        console.log("You rolled a four!");
        break;
    case (5):
        console.log("You rolled a five!");
        break;
    case (6):
        console.log("You rolled a six!");
        break;
}

//3.Loops:

let time = 1;
while ( Math.ceil(Math.random() * 6) <=3) {
        console.log("You rolled" + time + "times. The number is less than 3, keep rolling!");
        time++;
}
console.log("You rolled a number more than 3!");

//4.Loops:

random = Math.ceil(Math.random() * 10);
let fact = 1;
for (let i = 1; i <= random; i++) {
    fact = fact * i;
}
console.log("The factorial of this number is " + fact);

//5.Loops:

var my_array = ["#","##", "###","####"];
for (let i = 0; i < my_array.length ; i++) {
    console.log(my_array[i]);
}

//6.Loops and Conditions:

for (let i = 1; i < 9; i++) {
    if (i % 2 === 1) {
        console.log("#  #  #  #  ");
    } else {
        console.log("  #  #  #  #");
    }
}




