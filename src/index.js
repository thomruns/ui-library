// import the components
import Tooltip from './ui-scripts/tooltip';
import Dropdown from './ui-scripts/dropdown';
import Tabs from './ui-scripts/tabs';
import Snackbar from './ui-scripts/snackbar';

// create tooltips manually
const tooltip = new Tooltip(document.querySelector('.tooltip'));
const tooltip2 = new Tooltip(document.querySelector('.test-tip'));

tooltip.init();
tooltip2.init();

// create dropdowns
//  get all elements with a class of dropdown, returns a node list
const dropdowns = document.querySelectorAll('.dropdown');
// iterate over the node list
dropdowns.forEach(dropdown => {
  // create a new Dropdown instance for each element in the nodelist
  const instance = new Dropdown(dropdown);
  // call the init function
  instance.init();
});

// create tabs
// create new Tabs instance on tabs container
const tabs = new Tabs(document.querySelector('.tabs'));
// call the init funcion
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

// get the DOM button element for the snackbar
const button = document.querySelector('.snackbar-trigger');
// add a click event listener
button.addEventListener('click', () => {
  snackbar.show('You clicked me :)');
});
