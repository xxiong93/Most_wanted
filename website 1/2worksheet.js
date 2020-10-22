// let number = 13;

// let attemtps = [];

// while(true){
//     let stringNumber = number.toString();

//     let splitString = stringNumber.split('');//["1", "3"]

//     let sum = 0;

//     for(let i = 0; i < splitString.length; i++){
//         sum += (parseInt(splitString[i]) * parseInt(splitString[i]);
//     }
//     if(sum == 1){
//         console.log("Happy! :)");
//         break;
//     }
//     else if(attempts.includes(sum)){
//         console.log("Not Happy :(");
//         break;
//     }
//     else{
//         attempts.push(sum);
//         number = sum;
//     }
// }

function chooseDestination() {
    let destinations = ["Navarre", "Dora", "Loveland", "Atlanta"];
    var randomNumber = Math.floor((Math.random() * 4));
    //once var was declared for math.floor random will only need it once
    let chosenDestination = destinations[randomNumber];
    console.log(chosenDestination);
    return chosenDestination;
}
function chooseRestaurant() {
    let restaurant = ["Applebees", "Subway", "Outback", "Texas Road House"];
    randomNumber = Math.floor((Math.random() * 4));
    let chosenRestaurant = restaurant[randomNumber];
    return chosenRestaurant;
}
function chooseTransportation() {
    let transportation = ["Mustang", "Camaro", "Pontiac", "Audi"];
    randomNumber = Math.floor((Math.random() * 4));
    let chosenTransportation = transportation[randomNumber];
    return chosenTransportation;
}
function chooseEntertainment() {
    let entertainment = ["Hike", "b", "c", "d"];
    randomNumber = Math.floor((Math.random() * 4));
    let chosenEntertainment = entertainment[randomNumber];
    return chosenEntertainment;


}
let destination = chooseDestination();
let restaurant = chooseRestaurant();


//function choosefirstCheck() {
//let firstCheck = prompt("Different day trip?");
//}


//if(firstCheck === "yes"){
//    function chooseDestination()
//
//
//
//let completeBook = prompt("Complete booking click here");
//
//}





//if yes then re cycle through function choose destinations
//if no user wants to confirm day trip is complete if they like each selection





//git commands
//git status // checks for staged and untracked changes
//git add. //add files to staging (all files)
//git commit -m "messages" //commit staged files
//git pull //pull code to local repo from remote repo
//git push // push commits to remote repo
// 


//the Do/While Loop is a variant of the while loop. This loop will execute
//at least once, even if the condition is false, because the code block
//is executed before the condition is tested.// do {
    // code block to be executed
// }
// while (condition)how to add loops 