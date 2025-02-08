const ul = document.querySelector('ul');

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    let li = "";
    data.map(item=>{
        li+=`<li>${item.title}</li>`
    });
    ul.innerHTML = li
})