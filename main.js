// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let a = {      //this function switches between these values
  '♡':'♥',    //when I put in EMPTY_HEART or FULL_HEART I got 
  '♥':'♡'     //the word 'object' instead of a pretty heart.
};

// Your JavaScript code goes here!
const docHearts = document.querySelectorAll('.like-glyph'); //You need to iterate through what this returns

//liked.addEventListener('click', mimicServerCall)

function likePost(event) {
  const heart = event.target;
  mimicServerCall()
    .then(function(message) {
      heart.innerText = a[heart.innerText];
    })
    .catch(function(error) {
      const modal = document.getElementById("modal");
      modal.className = "",
      modal.innerText = error;
      setTimeout(() => modal.className = "hidden", 3000);
    });
}

//function swapHearts(heart) {          Instead of this, there is something 
//  if heart.innerText == EMPTY_HEART   called a Switch operator.
//    heart.innerText = FULL_HEART
//  else
//    heart.innerText = EMPTY_HEART
//}

for(let heart1 of docHearts) {
  heart1.addEventListener('click', likePost);     //because you use querySelectorAll
}                                                //use a for...of loop
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
