const list  = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click',() => {

    const Myitem = input.value;

    if (Myitem === ''){
        alert("Enter a value to add to the list");
    }
    else{
    input.value = '';

    
    console.log(Myitem);
    const listitem = document.createElement("li");
    const listText = document.createElement("span");
    const listButton = document.createElement("button");

    listitem.appendChild(listText);
    listText.textContent = Myitem;
    listitem.appendChild(listButton);
    listButton.textContent = 'Delete';
    list.appendChild(listitem);


    listButton.addEventListener("click",() =>{
        list.removeChild(listitem);
    });

    input.focus();
};

});



  