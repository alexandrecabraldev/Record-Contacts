const inputName = document.querySelector('#contact');
const inputNumber = document.querySelector('#contactNumber');
const button = document.querySelector('button');
const table = document.querySelector('table');


button.addEventListener('click',(event)=>{
    
    const style = window.getComputedStyle(table)

    if(inputName.value && inputNumber.value){

        event.preventDefault();

        if(style.display ==='none'){
            table.style.display= 'table';
        }

        const newLine = table.insertRow();

        const newCellContact = newLine.insertCell();
        const newCellNumber = newLine.insertCell();

        newCellContact.textContent = inputName.value;
        newCellNumber.textContent = inputNumber.value;
    }
})
