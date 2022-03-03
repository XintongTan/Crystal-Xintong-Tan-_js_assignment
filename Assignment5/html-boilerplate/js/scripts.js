//1
const pElements = document.getElementsByTagName('p');
const titleElements = document.getElementsByTagName('h1');

p1 = pElements[0];
p2 = pElements[1];
t = titleElements[0];
/*p1.style.backgroundColor = "rgb(255,0,0)";*/
p1.style.backgroundColor = 'pink';
p1.style.color = 'rgb(255,50,200)';
p2.style.backgroundColor = 'pink';
p2.style.color = 'rgb(255,50,200)';
t.style.color = 'rgb(255,50,200)';

//2

const new_para = document.createElement('p');
new_para.textContent = "Hello!";
p1.appendChild(new_para);

//3

/*function tableCreate() {*/
var tables = document.getElementsByClassName('primary_table active')[0];

new_tr = document.createElement('tr');
console.log(new_tr);
console.log(tables);
tables.appendChild(new_tr);

const trs = document.getElementsByTagName('tr')[1];



for (i = 1; i < 3; i++) {
    new_td = document.createElement('td');
    new_td.textContent = "new cell"+i;
    trs.appendChild(new_td);
}

const tds = document.getElementsByTagName('td');
const tcolor = ['yellow', 'orange', 'blue', 'light green'];

for (i = 0; i < tds.length; i++) {

   
    tds[i].style.background = tcolor[Math.floor(Math.random() * 3)];
    tds[i].style.color = 'white';
}





//4

const section = document.getElementsByTagName('section')[0];
const img = document.createElement('img');


img.src = "https://source.unsplash.com/random";
img.style.width = '200px';

section.appendChild(img);

//5

const button = document.createElement('p');

button.textContent = "Click me to change image";
button.style.color = 'Blue';
button.style.border = '1px solid grey';
section.appendChild(button);



const randomImage = ["https://i.picsum.photos/id/1062/5092/3395.jpg?hmac=o9m7qeU51uOLfXvepXcTrk2ZPiSBJEkiiOp-Qvxja-k",
    "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
    "https://media-be.chewy.com/wp-content/uploads/2016/09/01160419/black-cat-1.jpg",
    "https://i.picsum.photos/id/169/2500/1662.jpg?hmac=3DBeyQbiPxO88hBdhIuFPbvy2ff7cm9vmnq8lPIL9Ug",
    "https://pictures-of-cats.org/wp-content/uploads/2017/08/black-kitten.jpg"
];

var new_img = document.createElement('img');
new_img.style.width = '200px';
/*new_img.style.height = '200px';*/

button.addEventListener("click", function() {
    
    new_img.src = randomImage[Math.floor(Math.random() * 4)];
})

button.appendChild(new_img);



