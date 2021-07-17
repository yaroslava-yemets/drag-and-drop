'use strict';

const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

function dragStart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
};

function dragEnd(event) {
    event.target.className = 'item';
};

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragOver);
    placeholder.addEventListener('dragenter', dragEnter);
    placeholder.addEventListener('dragleave', dragLeave);
    placeholder.addEventListener('drop', dragDrop);
});

function dragOver(event) {
    event.preventDefault();
};

function dragEnter(event) {
    event.target.classList.add('hovered');
};

function dragLeave(event) {
    event.target.classList.remove('hovered');
};

function dragDrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
};