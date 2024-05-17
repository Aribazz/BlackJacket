// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

// 2. Use getRandomCard() to set the values of firstCard and secondCard
let cards = [] //array -operate order list items
let sum = 0; //14
let hasblackjack = false;
let isAlive = false;
let message = "";

//USING OBJECT
// 2. Create the player object. Give it two keys, name and chips, and set their values
let player={
    names :  "Per: ",
    chips : 145
}
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
// 4. Render the player's name and chips in playerEl
let playerEl=document.getElementById("player-el");
playerEl.textContent= player.names + "$"+player.chips;

console.log(cards);
// 1. Store the message-el paragraph in a variable called messageEl
// 2. Store the sum paragraph in a variable called sumEl
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let messageEl = document.getElementById("message-el");
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector("#card-el")
// 1. Declare a variable called message and assign its value to an empty string
// 2. Reassign the message variable to the string we're logging out

// 2. Create a startGame() function. Move the conditional
// below (line 16-29) inside the body of the function.

// Create a new function called startGame() that calls renderGame()
// 1. Create a function, getRandomCard(), that always returns the number 5
// Make this function return a random number between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13 ) + 1;
    // return randomNumber;
     // if 1     -> return 11
    // if 11-13 -> return 10
    if(randomNumber === 1){
        return 11
    }else if(randomNumber >10){
        return 10;
    }else{
        return randomNumber;
    }
}
function startGame(){
    isAlive = true;
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
   let firstCard = getRandomCard();
    let secondCard =  getRandomCard(); //4;
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    
    for(let i=0; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20 ) {
        message = "Do you want to draw a new card? 🙂";
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack! 🥳";
        hasblackjack = true;
        // console.log("Wohoo! You've got Blackjack!");
            // 3. Render the sum on the page using this format -> "Sum: 14"
                // 3. Render the cars on the page using this format -> "Cards: 10 4"
            // render out firstCard and secondCard
        // cardsEl.textContent = "Cards: " + firstcard + " " + secondCard;
        // cardsEl.textContent = "Cards: " ;
            // Create a for loop that renders out all the cards instead of just two
            //render all the Cards:
    }else{
        message = "You are out of the game.. 😭";
        isAlive = false;
    }
// 2. Display the message in the messageEl using messageEl.textContent

    messageEl.textContent = message;
}

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    //  sumEl.textContent = "Sum:";
    //  cardsEl.textContent = "Card:";
    //  messageEl.textContent= "Want to play a round?";
       // 1. Create a card variable, and hard code its value to a number (2-11)
    // 2. Use getRandomCard() to set the values of firstCard and secondCard
    // 2. Add the new card to the sum variable
    // sum = sum + card;
    // Push the card to the cards array
    // 3. Call startGame()
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if(isAlive ===true && hasblackjack ===false){
        let card =  getRandomCard();  //10;
        sum += card;
        cards.push(card);
        renderGame ();
        console.log(cards);
        
    }
    
}

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
let person ={
    name: "Per",
    age: 35,
    country: "Norway"
}
function logData(){

    console.log(person.name + " is "+person.age +" years old and live in " + person.country); 
}
logData();
// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation
let airbnb={
    isBuilding:true,
    title: "airbnb castle listing",
    numbers: 3,
    sections: ["firstHouse","secondHouse","thirdHouse"],
    image:["img/castle1.png","img/castle2.png"]
}

console.log(airbnb.image);
console.log(airbnb.numbers);
console.log(airbnb.title);

// console.log(totalCard);
console.log(hasblackjack);
// Try to modify the expression so that we get a range from 1 to 6
let randomNumber = Math.floor(Math.random()*6 )+ 1
console.log(randomNumber);

// Create a function, rollDice(), that returns a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
     //LOGICAL OPERATOR
// AND , OR & NOT OPERATOR
let hasCompletedCourse = true;
let giveCertificate = true;
//AND OPERATOR
if(hasCompletedCourse && giveCertificate){
generateCertificate()
}
function generateCertificate() {
    console.log("Generating certificate...")
}
// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true
// OR OPERATOR
let likesDocumentaries = false;
let likesStartups = true;
if(likesDocumentaries || likesStartups){
    recommendMovie();
} 
function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
let Dice = rollDice();
console.log(Dice);

// Arrays - ordered lists of items

// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 11;  count += 1 )  {
    
//     console.log(count)

// }
// for (let count = 1; count<11; count +=2){
//     console.log(count);
// }

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers
// for(let count = 10; count <=100; count +=1){
//     console.log(count);
// }
// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

// let bioDate =[
//     "I am a Front-End developer for 4 years",
//     "Graduate from Federal University of Technology, Minna",
//     "National Identity Card",
//     "Software Engineer"
// ]
// console.log(bioDate[0]);
// console.log(bioDate[1]);
// console.log(bioDate[2]);
// console.log(bioDate[3]);


// Array - ordered list of items - coposite / complex data type
// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)
//  let bioDatemain =[
    //     "I am a Front-End developer for 4 years",
    //     28,
    //     true
    //  ]
    
    // let item =[6,4];
    // item.push(8);
    // console.log(item);
    
    //Combining for loop with Array to Avoid DRY- Don't Repeat Yourself
    // let messages = [
    //     "Hey, how's it going?",        
    //     "I'm great, thank you! How about you?",
    //     "All good. Been working on my portfolio lately.",
    //     "Same here!",
    //     "Great to hear"
    // ]
    // for(let i=0;i < messages.length; i+=1){
    //     console.log(messages[i]);
    //     console.log(i);
    // }

    // Create a for loop that logs out all the cards in the array
    // Use cards.length to specify how long the loop should run
//     let cardsmain = [7, 3, 9];
//     for(let i=0;i<cardsmain.length; i +=1){
//         console.log(cardsmain[i]);
//     }

//     let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// // Render the sentence in the greetingEl paragraph using a for loop and .textContent

// for(let i =0; i< sentence.length ; i +=1){
//     console.log(sentence[i]);
//     // greetingEl.textContent = sentence[i];
//     greetingEl.textContent = greetingEl.textContent + sentence[i];
// }

//How to keep on in returning value in functions
let player1Time = 102
let player2Time = 107

function getfastestRaceTime(){
    if(player1Time < player2Time){
        return player1Time;
    }else if (player2Time > player1Time){
        return player2Time
    }else{
        return "both Players have Equal Time."
    }
}

let fastTimeRace = getfastestRaceTime();
console.log(fastTimeRace);
// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
function getTotalRaceTime() {
    return player1Time + player2Time
}
let Total = getTotalRaceTime();
console.log(Total);

// Push the newMessage to the messages array, and then log out the array

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!";

// messages.push(newMessage);
// console.log(messages)

// // How can you remove the last item in an array? Try to google it!
// messages.pop();
// console.log(messages);


// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// let age = 22
// if (age < 21){
//     console.log("You can not enter the club!");
// }else{
//     console.log("Welcome !");
// }


// Check if the person is elegible for a birthday card from the King! (100)
// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
// let card = 100;
// if (card < 100){
//     console.log("Not elegible");
// }else if (card === 100){
// console.log("Here is your birthday card from the King!");
// }else{
//     console.log("Not elegible, you have already gotten one");
// }
