// let sequence = []; 
// let userInput = []; 
// let round = 0; 



// function startGame() {
//   if (round > 0) {
//     round = 0; 
//     showMessage('Game reset.');
//   }
//   sequence = generateSequence(); 
//   playSequence(sequence); 


// function generateSequence() {
//   let emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻', '🐼', '🐯', '🦁', '🐷']; 
//   let sequence = [];
//   for (let i = 0; i < 5; i++) { 
//     let randomIndex = Math.floor(Math.random() * emojis.length); 
//     sequence.push(emojis[randomIndex]); 
//   }
//   return sequence;
// }


// function playSequence(sequence) {
//   let index = 0;
//   let interval = setInterval(() => {
//     if (index < sequence.length) {
//       displayEmoji(sequence[index]); 
//       index++;
//     } else {
//       clearInterval(interval); 
//       setTimeout(() => {
//         clearDisplay(); 
//       }, 1000);
//     }
//   }, 1000); 
// }


// function displayEmoji(emoji) {
//   let imogi = document.getElementById('imogi');
//   imogi.innerHTML = emoji;
// }


// function clearDisplay() {
//   let imogi = document.getElementById('imogi');
//   imogi.textContent = '';
// }

// function checkMemory(emoji) {
//   if (round === 0) {
//     showMessage('여우 버튼을 눌러 게임을 시작해주세요');
//     return;
//   }
//   userInput.push(emoji); 
//   if (userInput.length === sequence.length) {
//     if (arraysEqual(userInput, sequence)) { 
//       round++;
//       userInput = []; 
//       startGame(); 
//     } else {
//       showMessage('Sorry, 틀렸어요. Game over!');
//       round = 0; 
//       userInput = []; 
//       setTimeout(() => {
//         showMessage('');
//       }, 2000);
//     }
//   }
// }

// function showMessage(message) {
//   let messageDiv = document.getElementById('message');
//   messageDiv.textContent = message;
// }


// function arraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }
//   return true;
// }}

// function showMessage(message) {
//   let messageDiv = document.getElementById('message');
//   if (messageDiv) {
//       messageDiv.textContent = message;
//       messageDiv.style.display = "block"; 
//   } else {
//       console.error("Could not find 'message' element.");
//   }
// }
