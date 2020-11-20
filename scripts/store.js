/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import item from './item.js';

let items = [];
let hideCheckedItems = false;


function findById (id) {
  let list = this.items;
  let found = list.find(item => id === item.id);
  return found;
}

let addItem = function(name){
  try {
    item.validateName(name);
    // console.log(newItem);
    this.items.push(item.create(name));
  } catch (error){
    console.log(`Cannot add item: ${error.message}`);
  }
};

let findAndToggleChecked = function(id) {
  let newItem= this.findById(id);
  newItem.checked = !newItem.checked;
};

let findAndUpdateName = (id,newName) => {
  try {
    item.validateName(newName);
    let newItem= this.findById(id);
    newItem.name = name;
  }catch(error){
    console.lof(`Cannot update name: ${error.message}`);
  }
};

let findAndDelete = function(id) {
  this.items= this.items.filter(item => item.id !== id);
}; 

let toggleCheckedFilter = function (){
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default 
{
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};


