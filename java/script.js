// console.log(document.body);
// console.log(document.getElementsByTagName('h3'));
// console.log(document.getElementsByTagName('p'));

const types =document.getElementById('type');
types.style.textAlign="center"
const title =document.getElementById('type');

title.innerText="center"
title.style.backgroundColor="red"

//get element class name

const blogs = document.getElementsByClassName('blog');
    for (const bloger of blogs){
        bloger.style.margin= '15px';
        bloger.style.borderRadius= '10px';
        bloger.style.border= '2px solid green';
    }

// creatElement

const add = document.createElement('li')
add.innerText  = 'ami bondhu sada sala';

//where do the set

const ul  = document.getElementById('added')
ul.appendChild(add)