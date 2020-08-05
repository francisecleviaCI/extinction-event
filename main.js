//--#1--//
const lineThroughText = function(event) {
    const clickedItem = event.target
    clickedItem.style.textDecoration = 'line-through';
  }
  
  const allItems = document.querySelectorAll('ol');
  for (const item of allItems) {
    item.addEventListener('click', lineThroughText);
  }


//--#2--//
  const giveMeOpacity = function(event) {
    const clickedItem = event.target
    clickedItem.style.opacity= '0';
  }
  
  const allItems2 = document.querySelectorAll('ul');
  for (const item of allItems2) {
    item.addEventListener('click', giveMeOpacity);
  }

//--#3--//
const adiosDinosaur = function(event) {
    const clickedItem = event.target
    clickedItem.style.opacity= '0';
  }
  
  const allItems3 = document.querySelectorAll('section');
  for (const item of allItems3) {
    item.addEventListener('click', adiosDinosaur);
  }

//--#4--//


const totalExtinction = function() {
    allItems.style.textDecoration = 'line-through'; 
    allItems2.style.opacity= '0'; 
    allItems3.style.opacity= '0'; 
  }
  
  const allItems4 = document.querySelector('#destroy-all');
  for (const item of allItems) {
    item.addEventListener('click', totalExtinction);
  } 
  for (const item of allItems2) {
        item.addEventListener('click', totalExtinction);
    } 
    for (const item of allItems3) {
            item.addEventListener('click', totalExtinction);
  }

    