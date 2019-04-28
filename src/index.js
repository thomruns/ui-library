import Tooltip from './ui-scripts/tooltip';
import Dropdown from './ui-scripts/dropdown';

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

