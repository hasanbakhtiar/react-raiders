function personInfo(name="Arthur",surname="Morgan",birthYear=1990,edu="PhD"){
    return `Name:${name} Surname:${surname} age:${new Date().getFullYear()-birthYear} Education:${edu}`;
}


function carInfo(model="BMW",color="Balck",year=1990){
    return `Model:${model} Color:${color} age:${new Date().getFullYear()-year}`;
}
export {personInfo,carInfo}