const lineThroughText = function(event) {
    const clickedItem = event.target
    clickedItem.style.textDecoration = 'line-through';
  }
  
  const allItems = document.querySelectorAll('ol');
  for (const item of allItems) {
    item.addEventListener('click', lineThroughText);
  }

  const giveMeOpacity = function(event) {
    const clickedItem = event.target
    clickedItem.style.opacity= '0';
  }
  
  const allItems2 = document.querySelectorAll('ul');
  for (const item of allItems2) {
    item.addEventListener('click', giveMeOpacity);
  }