// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const error_modal = document.getElementById('modal');
const error_message = document.getElementById('modal-message');
const likes = document.getElementsByClassName('like');

modal.classList.add('hidden');

likes.forEach((like) => {
  like.addEventListener('click', handleClick)
})

function handleClick(event){
     const heart = event.target;
     mimicServerCall()
        .then( () => {
          if(heart.innerText === EMPTY_HEART){
            heart.innerText = FULL_HEART;
            heart.classList.add('activated-heart');
          }
          else{
            heart.innerText === EMPTY_HEART;
            heart.classList.remove('activated-heart');
          }
        })
        .catch( (error) => {
          error_message.innerText = error;
          error_modal.classList.remove('hidden');
          setTimeout( () => {
            error_modal.classList.add('hidden');
          }, 3000)
        })
}


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
