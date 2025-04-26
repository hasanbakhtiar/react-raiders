class Car{
    private ibrand:string;
    public iyear:number;
    public icolor:string;
    
    constructor(brand:string,year:number,color:string){
            this.ibrand = brand;
            this.iyear = year;
            this.icolor = color;
    }


    public speedCalculate(){
        return "";
    }
}


const MyCar = new Car("BMW",1990,"black");
// console.log(MyCar.ibrand);
console.log(MyCar.speedCalculate);




class Moto extends Car{
    constructor(brand:string,year:number,color:string){
        super(brand,year,color);
    }

    public getName(){
        this.speedCalculate();
    }
}





// function test(a:number,b:number){
//         return a+b;
// }


// console.log(test("10",20));
