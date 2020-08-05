const makeSelfBlue = function(event) {
    const itemClicked = event.target
    itemClicked.style.color = 'blue';
  }
  
  const allItems = document.querySelectorAll('.item');
  for (const item of allItems) {
    item.addEventListener('click', makeSelfBlue);
  }




  const addEventListener = function(type, func){
    if (type === 'click') {
        func();
    } else if (type === 'mouseover'){
        func()
    }
}

const changeParagraph = document.querySelector('p.mess-with-me');
changeParagraph.style.backgroundColor = 'green';

const makeDinoBorderRed = function(){
    firstDinoImage.style.border = 'red'; 
}

firstDinoImage.addEventListener('click', makeDinoBorderRed)