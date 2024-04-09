let ipt = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('ul');


btn.addEventListener('click', function(){
    let ele = document.createElement('li');
    ele.innerText = ipt.value;
    list.appendChild(ele);

    let dltBtn = document.createElement('button');
    dltBtn.classList.add('delete');
    dltBtn.innerText = "Remove";

    ele.appendChild(dltBtn);
    ipt.value =" ";
});


list.addEventListener('click', function(event){
    if( event.target.tagName=="BUTTON" ){
        let ele = event.target.parentElement;
        ele.remove();
    } else {
        console.log("Don't Delete");
    }

})