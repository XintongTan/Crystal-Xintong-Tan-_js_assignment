
//1



function reverse(str) {

    var reversed = str.split('');
    var output = "";
    /*new_a = [];*/

    for ( let i = str.length-1; i >= 0; i--) {
        /*console.log(i);*/
        output += reversed[i].toString();
        /* console.log(new_a);*/
    }

    console.log(output);
    
}

reverse("Hello");

//2

function checkPalindrome(str) {
    var check_str = str.split('');

    if (check_str[0] == check_str[check_str.length - 1]) {
        console.log('this is a palindrome!');
    } else {
        console.log("this is not a palindrome!");
    }
}

checkPalindrome('hello');


//3

function checkLeap(num) {
    if (num % 4 === 0) {
        console.log('this year is a leap year!');
    } else {
        console.log('this year is not a leap year');
    }
}

checkLeap(2022);


//4


function wordCount(str) {

    str = str.replace(/[^a-zA-Z0-9\s]/g, "");
    var check_str = str.split(" ");

    console.log(check_str);
    console.log(check_str.length);

}

wordCount("I like An & Crystal");
wordCount("If all else perished, and he remained, I should still continue to be; and if all else remained, and he were annihilated, the universe would turn to a mighty stranger.")


//5 
const the_date = new Date();
const qs = [
    ["how are you", "Good!"],
    ["name", "Crystal"],
    ["what you doing", "Talking to you:)"],
    ["date", "It is the " + the_date.getMonth() + "." + the_date.getDate()+ "."],
    ["time", "It is " + the_date.getHours() + ":" + the_date.getMinutes() + "."],
    ["color hair", "Black"],
    ["feel", "Happy!"],
    ["weather today", "Sunny!"],
    ["you", ":)"]
];



const form = document.forms[0];
const h2 = document.getElementsByTagName('h2')[0];
const img = document.createElement('img');
img.src = "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg";
img.style.width = '200px';
img.style.paddingLeft = '20px';

h2.appendChild(img);

form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    console.log("submitting form", this.name);

    const inp = document.getElementById('SearchBox');
    new_inp = inp.value.replace(/[^a-zA-Z0-9\s]/g, "").toLowerCase();

    const new_a = document.createElement('p');

    for (let number of qs) {
       
        if (new_inp.match(number[0]) == number[0] ) {
            
            new_a.classList.add('error');
            new_a.innerHTML = number[1];
            break;
        } else {
            new_a.classList.add('error');
            new_a.innerHTML = "Sorry, I don't understand.";
            
        }

    }

    console.log(new_inp);
    form.insertBefore(new_a, inp.nextSibling);
    inp.focus();

})
