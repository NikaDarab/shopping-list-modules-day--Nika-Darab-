/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import item from './item.js';

let items = [];
let hideCheckedItems = false;

let findById = (id) => {
  let list = store.items;
  let found = list.find(item => id = item.id);
  return found;
};

let addItem = (name) => {
  try {
    item.validateName(name);
    let newItem=item.create;
    let list = this.items;
    list.push(newItem);

  } catch (error){
    console.log(`Cannot add item: ${error.message}`);
  }
};

let findAndToggleChecked = (id) => {
  let item= this.findById(id);
  toggleCheckedForListItem(item);
};

let findAndUpdateName = (id,newName) => {
  try {
    item.validateName(newName);
    findById(id);
  }catch(error){
    console.lof(`Cannot update name: ${error.message}`);
  }
};


export default 
{
  items,
  hideCheckedItems,
};



