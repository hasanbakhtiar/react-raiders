// let testWindow;
//
// const myWindow = ()=> {
//   testWindow = window.open("","Google","width=300, height=300");};
//
//
// document.querySelectorAll('button')[0].onclick=()=>{
//   myWindow();
//      }
//
// document.querySelectorAll('button')[1].onclick=()=>{
//         testWindow.resizeTo(500, 100);
// }

//
// const writeText = ()=>{
//   document.write('hello');
// }
//
// setTimeout(writeText, 2000);

//   const writeText = ()=>{
//       document.write('hello');
//   }
//
// setInterval(writeText, 2000);

// setTimeout(() => {
//   document.querySelector("img").attributes[0].value =
//     "https://wallup.net/wp-content/uploads/2016/03/10/318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg";
// }, 2000);

// setTimeout(() => {
//   document.querySelector("img").attributes[0].value =
//     "https://wallpapers.com/images/featured/beautiful-nature-pictures-qjcss5r32ziry34t.jpg";
// }, 4000);



// const preloader = document.querySelector('.preloader');
// const text = document.querySelector('.text');

// preloader.style.display = "block";
// text.style.display = "none";

// setTimeout(()=>{
//     preloader.style.display = "none";
//     text.style.display = "block";

// },2000)


const h1 = document.querySelector('h1');
const watch = () => {
    
    h1.innerHTML = `Saat:${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
}

const eventWatch = setInterval(watch, 1000);

document.querySelector('button').onclick=()=>{
    clearInterval(eventWatch);
}



