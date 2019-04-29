import './styles/snackbar.css'; // add class styling

class Snackbar {
  constructor() {
    // create a new DOM div element
    this.snackbar = document.createElement('div');
  }
  init() {
    // add a class to the new DOM element
    this.snackbar.classList.add('snackbar');
    // append this new element to the body of the document
    document.querySelector('body').appendChild(this.snackbar);
  }
  show(message) {
    // add the message string as the text content of the element
    this.snackbar.textContent = message;
    // add an active class to reveal the element
    this.snackbar.classList.add('active');
    // set a timeout to remove active class and hide the element
    setTimeout(() => {
      this.snackbar.classList.remove('active');
    }, 4000);
  }
}

export { Snackbar as default }