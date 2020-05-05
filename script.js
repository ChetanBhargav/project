// Get an HTML element in JavaScript code
const signup = document.querySelector(".signup");
const signupModal = document.querySelector(".signup-modal-wrapper");
const closeButton = document.querySelector(".close-modal");

// function which shows the modal by changing the style of signupModal to "block"
const showModal = () => {
  signupModal.style.display = "block";
};

// function which hides the modal by changing the style of signupModal to "none"
const closeModal = () => {
  signupModal.style.display = "none";
};

// Call the showModal function when signup button is clicked
signup.addEventListener("click", () => {
  showModal();
});

// Call the closeModal function when close button on the modal is clicked
closeButton.addEventListener("click", () => {
  closeModal();
});

// Call the closeModal function when anywhere outside of the modal is clicked
window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModal();
  }
});

// Get an HTML element in JavaScript code
const signupfb = document.querySelector(".facebook");
const signupModalFb = document.querySelector(".signup-modal-wrapper-fb");
const closeButtonFb = document.querySelector(".close-modal-fb");

// function which shows the modal by changing the style of signupModal to "block"
const showModalFb = () => {
  signupModalFb.style.display = "block";
};

// function which hides the modal by changing the style of signupModal to "none"
const closeModalFb = () => {
  signupModalFb.style.display = "none";
};

// Call the showModal function when signup button is clicked
signupfb.addEventListener("click", () => {
  showModalFb();
});

// Call the closeModal function when close button on the modal is clicked
closeButtonFb.addEventListener("click", () => {
  closeModalFb();
});

// Call the closeModal function when anywhere outside of the modal is clicked
window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModalFb();
  }
});

// Get an HTML element in JavaScript code
const signuptweet = document.querySelector(".twitter");
const signupModalTweet = document.querySelector(".signup-modal-wrapper-tweet");
const closeButtonTweet = document.querySelector(".close-modal-tweet");

// function which shows the modal by changing the style of signupModal to "block"
const showModalTweet = () => {
  signupModalTweet.style.display = "block";
};

// function which hides the modal by changing the style of signupModal to "none"
const closeModalTweet = () => {
  signupModalTweet.style.display = "none";
};

// Call the showModal function when signup button is clicked
signuptweet.addEventListener("click", () => {
  showModalTweet();
});

// Call the closeModal function when close button on the modal is clicked
closeButtonTweet.addEventListener("click", () => {
  closeModalTweet();
});

// Call the closeModal function when anywhere outside of the modal is clicked
window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModalTweet();
  }
});
