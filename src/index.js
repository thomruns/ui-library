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
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('.snackbar-trigger');
button.addEventListener('click', () => {
  snackbar.show('You clicked me :)');
});
