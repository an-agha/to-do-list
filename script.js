let id = 0;

function addToList() {
    let listItem = document.getElementById('list-item');
    let listItemValue = listItem.value.trim(); 
    if (listItemValue === "")
        return alert('Please enter an item.');
    listItem.value = "";

    let mainList = document.createElement('li');
    let listCont = document.createElement('span');
    let checkBtn = document.createElement('input');
    let dltBtn = document.createElement('button');

    listCont.innerText = listItemValue;
    dltBtn.innerText ='Delete';
    mainList.appendChild(listCont); 
    mainList.appendChild(checkBtn);
    mainList.appendChild(dltBtn);

    mainList.setAttribute('class','li-style');
    listCont.setAttribute('class','item');
    checkBtn.setAttribute('type','checkbox')
    checkBtn.setAttribute('class','box');
    dltBtn.setAttribute('class','dlt-btn');
    mainList.setAttribute('id',id);
    checkBtn.setAttribute('onchange',`chngProp(${id})`);
    dltBtn.setAttribute('onclick',`dltItem(${id++})`);

    document.getElementById('list-parent').appendChild(mainList);
}

function dltItem(id){
    document.getElementById(id).remove();
}
function chngProp(id){
    document.getElementById(id).classList.toggle('done');
}