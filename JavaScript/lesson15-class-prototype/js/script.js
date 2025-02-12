const infoOne = () => {
    return {
        name: "Hello"
    }
}
// ====================================
// function infoTwo(name,birthYear){
//         this.myname = name;
//         this.myBirthYear = birthYear;
//         this.myCalculateAge = calculateAge("test");

//         function calculateAge(a){
//             return `${a}-${name}:${new Date().getFullYear() - birthYear}`
//         }
// }

// // const myInfoOne = new infoOne();
// const myInfoTwo = new infoTwo("Ayan",2000);
// infoTwo.prototype.eyeColor = "black";
// console.log(myInfoTwo.myCalculateAge);
// console.log(myInfoTwo.eyeColor);





class infoTwo {
    constructor(name, birthYear) {
        this.myname = name;
        this.myBirthYear = birthYear;
    }

    calculateAge(a) {
        return `${a}-${this.myname}:${new Date().getFullYear() - this.myBirthYear}`
    }
}

const myInfoTwo = new infoTwo("Ayan", 2000);
console.log(myInfoTwo.calculateAge("Hello"));


class infoThree extends infoTwo {
    constructor(name, birthYear) {
        super(name, birthYear);
    }
}

const myInfoThree = new infoThree("Gunel", 2004);
console.log(myInfoThree.calculateAge("hola"));

class infoFour extends infoThree {
    constructor(name, birthYear) {
        super(name, birthYear);
    }
}

const myInfoFour = new infoFour("Turan",2003);
console.log(myInfoFour.calculateAge("?Como estas?"));


