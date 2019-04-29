import './styles/tabs.css'; // import CSS styling

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll('.trigger');
  }
  init() {
    // cycle through the html collection
    this.tabs.forEach(tab => {
      // add a click listener to each
      tab.addEventListener('click', e => {
        // call the toggleTabs function
        this.toggleTabs(e);
        // call the toggleContent function
        this.toggleContent(e);
      });
    });
  }
  toggleTabs(e) {
    // remove current active classes from all tabs
    this.tabs.forEach(tab => tab.classList.remove('active'));
    // add new active class to clicked tab
    e.target.classList.add('active');
  }
  toggleContent(e) {
    // remove current active classes from content
    this.container.querySelectorAll('.content').forEach(item => {
      item.classList.remove('active');
    });
    // add new active class to content
    const selector = e.target.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    content.classList.add('active');
  }
}

export { Tabs as default }