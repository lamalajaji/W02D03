
//TASK1

class car {
   constructor(make, model, colour, image, regNum, price) {
     this.make = make;
     this.model = model;
     this.colour = colour;
     this.image = image;
     this.regNum = regNum;
     this.price = price;
     }
     editPrice(newPrice) {
       return (this.price = newPrice*0.5);
   }
   
   showAll() {
     console.log(car);
   }
 }


const car1 = new car('car',2019 , 'black', true , 001 , 70000 );
const car2 = new car("car", 2020, "black", true, 002, 80000);
const car3 = new car("car", 2018, "white", false, 003, 900000);
const car4 = new car("car", 2016, "orange", true, 004, 100000);
const car5 = new car("car", 2018, "white", false, 005, 60000);


console.log(car1.colour);
console.log(car1.editPrice(7000));


