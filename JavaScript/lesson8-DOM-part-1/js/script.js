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





// const myBtn = document.querySelector('.my-btn');
// const myText = document.querySelector('.my-text');

// myBtn.onmouseover = () => {
//     myBtn.innerHTML = "Country";
//     myText.innerHTML = 'Capital:<span class="text-danger">London</span>';
// }

// myBtn.onmouseout = () => {
//     myBtn.innerHTML = "Capital";
//     myText.innerHTML = 'Country:<span class="text-danger">England</span>';
// }



// const changeData = () => {
//     if (myBtn.innerHTML ==="Capital") {
//         myBtn.innerHTML = "Country";
//         myText.innerHTML = 'Capital:<span class="text-danger">London</span>';
//     }else{
//         myBtn.innerHTML = "Capital";
//         myText.innerHTML = 'Country:<span class="text-danger">England</span>';
//     }
// }


// myBtn.onclick = changeData;
// myBtn.onmouseover = changeData;
// myBtn.onmouseout = changeData;

import { langData, products } from "./data.js";
const langBtn = document.querySelector('#lang-btn');
const navLink = document.querySelectorAll('.nav-link');
const multiLang = () => {
    if (langBtn.innerHTML === "AZ") {
        langBtn.innerHTML = "EN";
        langData.az.map((item, index) => {
            navLink[index].innerHTML = item;
        })
    } else {
        langBtn.innerHTML = "AZ";
        langData.en.map((item, index) => {
            navLink[index].innerHTML = item;
        })
    }

}
langBtn.onclick = multiLang;



const row = document.querySelector('.row');
let card = "";
const listData = () => {
    products.map(item => (
        card += `
        <div class="col-12 col-sm-6 col-md-3">
            <div class="card" >
                <img style="height:300px;object-fit:contain" src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title.substring(0, 10)}...</h5>
                    <p class="card-text">${item.description.substring(0, 40)}...</p>
                    <a href="#" class="btn btn-dark">More details</a>
                </div>
            </div>
        </div>
        `
    ))
    row.innerHTML = card;
}

listData()





