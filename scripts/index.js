/* eslint-disable no-unused-vars */
import shoppingList from './shopping-list.js';
import item from './item.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);