


// let info = 5;

// do {
//     info++;//action   
//     console.log(info); //result
// } while (info > 10);


// WHILE LOOP
// while (info>10) { //condition
//     console.log(info); //result
//     info++; //action
// }



// for 
// for(let info = 5;info<10;info++){
//     console.log(info);
    
// }


const phones = [
    { title: "iPhone 14", price: 999, color: "Black" },
    { title: "Samsung Galaxy S23", price: 899, color: "Green" },
    { title: "Google Pixel 8", price: 799, color: "White" },
    { title: "Xiaomi Mi 13", price: 699, color: "Blue" },
    { title: "OnePlus 11", price: 749, color: "Red" },
    { title: "Sony Xperia 1 V", price: 1199, color: "Purple" },
    { title: "Huawei P60 Pro", price: 899, color: "Silver" },
    { title: "Asus ROG Phone 7", price: 1099, color: "Black" },
    { title: "Motorola Edge 40", price: 799, color: "Gold" },
    { title: "Realme GT 5", price: 699, color: "Green" }
  ];

//   const selectPrice = 700;

//   for(let info=0; info<phones.length; info++){
    
//     if (phones[info].price<selectPrice) {
        
//         console.log(phones[info].title + " - $"+phones[info].price);
//     }
    
//   }

// for(let info in phones){

//     console.log(phones[info].title + " - $"+phones[info].price);
    
// }

for (let data of phones){
    console.log(data.title);
    
}


console.log(phones);

  






