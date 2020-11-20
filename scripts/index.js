/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import shoppingList from './shopping-list.js';
import item from './item.js';
import store from './store.js';

const main = function () {
  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);