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
ul.appendChild(add);

// where to add
const headers =document.getElementById('header-item');
//console.log(headers)

const article =document.createElement('article');
// const h1.innerText = 'This is header';
const h1 =document.createElement('h1');
h1.innerText = 'This is header';
article.appendChild(h1);

const ol = document.createElement('ol')
const li1 =document.createElement('li')
li1.innerText='ajke muri khaw'
ol.appendChild(li1)
const li2 =document.createElement('li')
li2.innerText='ajke mango khaw'
ol.appendChild(li2)
const li3 =document.createElement('li')
li3.innerText='ajke chatu khaw'
ol.appendChild(li3)


headers.appendChild(article)
headers.appendChild(ol)