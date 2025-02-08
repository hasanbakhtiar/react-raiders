const ul = document.querySelector('ul');


const productList = (start,end)=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>{
        let li = "";
        data.products.slice(start,end).map(item=>{
            li+=`<li><img width="70" src="${item.images[0]}"/>${item.title}</li>`
        });
        ul.innerHTML = li
    });
}

productList(5,10);

