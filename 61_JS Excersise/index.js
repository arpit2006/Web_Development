// // Adjective
// //Crazy
// //Amazing
// //Fire

// // Shopname 
// //Engine 
// //Foods
// // Garment

// // Other
// //Bros
// //limited
// //Hub

// Engine (Automotive/Mechanical) Business Names
// Crazy Engine Bros
// Amazing Engine Hub
// Fire Engine Limited
// Foods (Restaurant/Food-related) Business Names
// Fire Foods Hub
// Crazy Foods Limited
// Amazing Foods Bros
// Garment (Clothing/Fashion) Business Names
// Fire Garment Hub
// Amazing Garment Bros
// Crazy Garment Limited

let rand = Math.random();
let first,second,third;


//First 
if (rand < 0.33){
    first = "Crazy";
}
else if ( rand < 0.66 && rand>=0.33){
    second = "Amazing";
} 
else{
    third = "Fire";
}
//Second
if (rand < 0.33){
    first = "Engine";
}
else if ( rand < 0.66 && rand>=0.33){
    second = "Food";
} 
else{
    third = "Garment";
}
//Third
if (rand < 0.33){
    first = "Bros";
}
else if ( rand < 0.66 && rand>=0.33){
    second = "Limited";
} 
else{
    third = "Hub";
}
console.log(`${first} ${second} ${third}`);


