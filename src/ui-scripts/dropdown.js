import './styles/dropdown.css'; // add class styling

class Dropdown {
  constructor(container) {
    this.container = container;
    this.trigger = container.querySelector('.trigger');
    this.content = container.querySelector('.content');
  }
  init() {
    // add click event listener
    this.trigger.addEventListener('click', () => {
      // toggle class on trigger title to reveal or hide
      this.trigger.classList.toggle('active');
      // toggle class on content to reveal or hide
      this.content.classList.toggle('active');
    });
  }
}

export { Dropdown as default };