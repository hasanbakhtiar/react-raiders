




// try {
//     throw("everything is ok")
//     console.laog('hello');


// } catch (error) {
//     console.log("Have a error read this:"+error);

// }finally{
//     console.log('Im working everytime');

// }



// const myFetch = new Promise((resolve, reject) => {
//     const process = false;
//     if (process) {
//         resolve("Process is successfull!");
//     } else {
//         reject("Process is worng!");
//     }
// });

// myFetch
//     .then(res => console.log(res))
//     .catch(err => console.log("Error" + err))
//     .finally(console.log('Im working everytime'))

// fetch("https://dummyjson.com/products")
//     .then(res => console.log(res))
//     .catch(err => console.log("Error" + err))
//     .finally(console.log('Im working everytime'))



const fetchData = async(apiName="Store",apiUrl="https://fakestoreapi.com/products")=>{
    const comingData = await fetch(apiUrl);
    const data = await comingData.json();
    console.log(apiName);
    console.log(data);
    

}
fetchData("Dummy","https://dummyjson.com/products");
setTimeout(fetchData,2000);