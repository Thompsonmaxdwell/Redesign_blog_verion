 export let selectElement = (element)=>{
    let selectedElement = document.querySelector(element);
    selectedElement = selectedElement ? selectedElement :  `${selectedElement} not Found`

    return selectedElement 
}


export let selectAllElement = (allElement)=>{
 let selectedAllElement = document.querySelectorAll(allElement);
   selectedAllElement = selectedAllElement ? selectedAllElement : `${selectedAllElement} not Found`
    
  return selectedAllElement 
}
