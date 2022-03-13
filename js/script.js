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
	let closeBtn = document.createElement('button');
	closeBtn.classList.add('close-btn');
	closeBtn.innerHTML = 'x';
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
	popup.append(closeBtn);
    }

    checkbox.addEventListener('click', onClickCheckbox);
    btn.addEventListener('click', createItem);

    window.addEventListener('click', function(event) {
	if(! event.target.classList.contains('popup')) {
	    if(document.querySelector('.popup--active')) {
		let tmp = document.querySelector('.popup--active');
		console.log(event.target.parentElement === tmp);
		if(event.target.classList.contains('list__item')) {
		    if(event.target.parentElement === tmp) {
			tmp.classList.remove('popup--active');
		    } else {
		        tmp.classList.remove('popup--active');
		        event.target.parentElement.classList.add('popup--active');
		    } 
		} else {
		    tmp.classList.remove('popup--active');
		}
	    } else if(event.target.classList.contains('list__item')) {
	        event.target.parentElement.classList.add('popup--active');
            }
	}
		
    })    
});