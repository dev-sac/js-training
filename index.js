// Task 1 - What will this print and WHY?
// const obj = {
//   name: "Sachin",
//   greet: function() {
//     console.log(this.name);
//   }
// };

// obj.greet();

// const fn = obj.greet;
// fn();



// Task 2
// const obj = {
//   name: "Sachin",
//   greet: function() {
//     setTimeout(function() {
//       console.log(this.name);
//     }, 1000);
//   }
// };

// obj.greet();


// const obj = {
//   name: "Sachin",
//   greet: function() {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   }
// };



// Regular function → this depends on how it is called
// Arrow function → this depends on where it is defined -- Ned to bookmark somewhere