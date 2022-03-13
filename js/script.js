document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.getElementById('checkbox');
    let btn = document.querySelector('.btn');

    function onClickCheckbox() {
        let elements = document.querySelectorAll('.list__item-container');
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('active');
        }  
    }

    function createItem() {
        let list = document.querySelector('.list');
        let li = document.createElement('li');
        let div = document.createElement('div');
        let popup = document.createElement('div');
        div.classList.add('list__item');
        popup.classList.add('popup');
        popup.innerHTML = 'Блок&nbsp';
        li.classList.add('list__item-container');
        if(checkbox.checked) {
            li.classList.add('active');
        }
        li.append(div);
        li.append(popup);
        list.append(li);
    }

    checkbox.addEventListener('click', onClickCheckbox);
    btn.addEventListener('click', createItem);

    window.addEventListener('click', function(event) {
        console.log(event.target);
        if(event.target.classList.contains('list__item')) {
            event.target.parentElement.classList.toggle('popup--active');
        }
    })    
});