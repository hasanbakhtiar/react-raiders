// "use strict";
// a = 5;
// console.log(a);

import { cars, people } from "./data.js";


// function discriminant (b,a,c){
//     const result = b**2-(4*(a*c));
//     if (result<0) {
//         console.log("Discriminant menfi ededdir:",result);
//     }else{
//         console.log("Discriminant musbet ededdir:",result);

//     }
// }
// discriminant(9,2,3);
// discriminant(10,23,0);
// discriminant(0,3,30);


// function name(params){
//     // code
// }

// import * as data from "./data.js";
// import { carInfo, personInfo } from "./utils.js";

// for(let i of data.cars){
//     console.log(carInfo(i.model,i.color,i.year));
// }
// console.log("-------------------------");

// for(let i of data.people){
//     console.log(personInfo(i.name,i.surname,i.birthYear,i.edu));
// }

// console.log(personInfo());


// const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut adipisci quasi accusantium optio pariatur deleniti, placeat molestiae vero explicabo. Nobis itaque harum error? Provident, qui recusandae? Iusto soluta illo, deleniti adipisci dolore delectus, molestiae ut ipsa placeat quaerat labore et eveniet? Fugiat reprehenderit aliquid sapiente nobis dolore iste doloremque dolores soluta quae at exercitationem ut commodi mollitia ratione suscipit accusamus maiores eveniet, eaque alias consequatur repellendus! Iusto soluta harum laudantium voluptatum. Ratione sit accusamus, est accusantium voluptates ad porro numquam fuga suscipit quis et quam ea repudiandae consequatur consequuntur! Quaerat quod fuga quisquam voluptatem omnis iure pariatur consequatur saepe sapiente?";

// console.log(text.substring(0,100)+"...");

// info()
// // Function Decleration
// function info(){
//     console.log('Function Decleration');
//     // code
// }


// Function Expression 
// const info = function(){
//     console.log("Function Expression");
// }
// info();


// IIFE - An immediately-invoked function expression

// (function(a){
//     console.log("An immediately-invoked function expression",a);
    
// })("Data")


// ()=>{} Arrow function(ES6-2015)
// const info = ()=>{
//     console.log("Arrow Fuction");
    
// }
// info()














const dataList = (comingData)=>{
    
        for(let item of comingData.data){
        if (comingData.category==="people") {
            console.log(item.name);
        }else if( comingData.category==="cars"){
            console.log(item.model);
        }
        }
}

dataList(cars,cat)


const dataAndFilter = (data,filterCat,filterItem)=>{

}

const filterCatData = ["ratring","color"]
const filterCatItems = [10,"blue"]
dataAndFilter(a,filterCatData,filterCatItems)