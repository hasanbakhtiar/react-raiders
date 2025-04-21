// const infoArr:string[] = ["table","chair","pen"];
// const infoArr:Array<string> = ["table","chair","pen"];
// const infoArr:Array<string | number> = ["table","chair","pen",5];



// type productType={
//     title:string,
//     price:number,
//     stock:boolean
// }


// const product:productType = {
//     title:"Samsung s25",
//     price:3000,
//     stock:true
// }



type productType = {
    title: string,
    price: number,
    stock: boolean
}


const product: productType[] = [{
    title: "Samsung s25",
    price: 3000,
    stock: true
}]


console.log(product);
