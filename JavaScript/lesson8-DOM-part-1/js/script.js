// const info = document.getElementsByTagName('h1');
// console.log(info);
// for (let index = 0; index < info.length; index++) {
//     info[index].innerHTML = '<i>New value</i>';
// }
// info.innerHTML = '<i>New value</i>';


// const infoText = document.getElementById('text');
// console.log(infoText);
// const helloMello = document.getElementsByClassName('hello-mello');
// console.log(helloMello);


// const myElem = document.querySelectorAll('.hello-mello')[1];
// console.log(myElem);


// const myBtn = document.querySelector('button');

// const pressbtn = () => {
//     console.log('button was pressed');
// }

// myBtn.addEventListener('click',pressbtn,true)
// myBtn.onclick = pressbtn;





const myBtn = document.querySelector('.my-btn');
const myText = document.querySelector('.my-text');


const changeData = ()=>{
    myBtn.innerHTML = "Country";
    myText.innerHTML = 'Capital:<span class="text-danger">London</span>';
}


myBtn.onclick = changeData;



