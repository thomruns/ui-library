import './styles/tooltip.css'; // CSS styling to be used

class Tooltip {
  constructor(element) {
    this.element = element;
    this.message = element.getAttribute('data-message'); // attribute of the element in the html
  }
  init() {
    // create a new DOM div element for the tip
    const tip = document.createElement('div');
    // add a class to this element for styling
    tip.classList.add('tip');
    // get the text message from the element's data property
    tip.textContent = this.message;
    // append the new element to the DOM
    this.element.appendChild(tip);
    // create a mouseenter listener
    this.element.addEventListener('mouseenter', () => {
      // add a styling class on enter
      tip.classList.add('active');
    });
    // create a mouseleave event
    this.element.addEventListener('mouseleave', () => {
      // remove the styling class on leave
      tip.classList.remove('active');
    });

  }
}

// export the module
export { Tooltip as default };