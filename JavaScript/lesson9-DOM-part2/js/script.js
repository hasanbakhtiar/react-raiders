

const text = document.querySelector('p');
const myOp = document.querySelectorAll('option')[0];
const mySel = document.querySelector('select');
mySel.onchange = (e)=>{
    if (e.target.value==="a") {
        text.innerHTML = 234*1.7;
    }else if(e.target.value==="b")
        text.innerHTML = 234*2
}





// cryingP.setAttribute('class','dont cry');


// const modeBtn = document.querySelector("#mode-btn");
// const navBar = document.querySelector("nav");
// modeBtn.onclick = () => {
//   if (modeBtn.innerHTML == "Dark") {
//     navBar.className = "navbar navbar-expand-lg navbar-dark bg-dark";
//     modeBtn.innerHTML = "Light";
//   } else {
//     navBar.className = "navbar navbar-expand-lg navbar-light bg-light";
//     modeBtn.innerHTML = "Dark";
//   }
// };

// const btnOne = document.querySelectorAll("button")[0];
// const btnTwo = document.querySelectorAll("button")[1];

// const imgOne = document.querySelectorAll("img")[0];
// const imgTwo = document.querySelectorAll("img")[1];

// btnTwo.onclick = ()=>{
//     imgOne.style.opacity = 0;
//     imgTwo.style.opacity = 1;
// }

// btnOne.onclick = ()=>{
//     imgOne.style.opacity = 1;
//     imgTwo.style.opacity = 0;
// }

// const text = document.querySelector("p");
// const myBtn = document.querySelector(".my-btn");
// const myImg = document.querySelector('#myphoto');

// myBtn.onclick=()=>{
// text.className = 'mygreen';
// text.classList.add('mygreen');
// text.classList.remove('mytext')
// text.classList.toggle('mygreen')

// text.innerHTML = "New data";
// myImg.attributes[2].value = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg";
// text.attributes[0].value="mygreen";
// text.className
// text.style.color = "red";
// }
// console.log(text.classList.add());
