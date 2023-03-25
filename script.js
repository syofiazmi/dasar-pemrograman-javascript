// const firstString = "Hello";
// const secondString = "JavaScript";

// console.log(firstString + secondString);


// const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

// // TODO: Kode untuk menambahkan item Charlie pada index ke-2
// phoneticAlphabet.splice(2,0,"Charlie");

// console.log(phoneticAlphabet);


// const artistsAndSongs = {
//     "Keyakizaka46": ["Silent Majority"],
//     "Blackpink": ["How You Like That", "Ice Cream"],
//     "JKT48": ["Rapsodi", "Heavy Rotation"],
//     "Twice": ["What is Love?"],
// }

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

// delete artistsAndSongs["Keyakizaka46"];

// class Car { }
// const car = new Car();
// console.log(typeof Car);

// function car({ brand, maxSpeed, wheelCount }) {
//     this.brand = brand;
//     this.maxSpeed = maxSpeed;
//     this.wheelCount = wheelCount;
//   }
  
//   const myCar = new car({ brand: 'Toyota', maxSpeed: 200, wheelCount: 4 });

//   console.log(myCar)

// try {
//     const arr = [1, 2, 3, 4];
//     for (let i = 0; i <= 4; i++) {
//         console.log(arr[i]);
//     }
// } catch(e) {
//     console.log("Out of bounds");
// }

// let myString = "";

// try {
//     myString += "a";
//     // throw Error();
// } catch(e) {
//     myString += "b";
// } finally {
//     myString += "c";
//     // throw Error();
//     myString += "d";
// }

// console.log(myString);

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(2));