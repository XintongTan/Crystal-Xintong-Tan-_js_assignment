
console.log("Let's play tennis with friends!")
let friends_state = prompt("Have your friends arrived? (yes/no)");

if (friends_state == "yes") {
    let stretch_state = prompt("Do you stretch before starting the match? (yes/no)");

    if (stretch_state == "yes") {
        console.log("You had a great game!");
    } else {
        console.log("You had a sore ankle after the match:(");
    }
} else {
    console.log("Your friend showed up late, and you did not have a good time.");
}





