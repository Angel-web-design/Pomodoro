const tasks = [];
let time = 0;
let timer = null;
let TimeBreak = null;
let currentTask = null;

const add = document.querySelector('#tAdd')
const itTask = document.querySelector('#task-input')
const form = document.querySelector('.form')
const pomodoreTimer = document.querySelector('#pomodoreTimer')
const playButton = document.querySelector('.play')

form.addEventListener('submit', e => {
    e.preventDefault();
    if(itTask.value !== ''){
        createTask(itTask.value);
        itTask.value = ''
    }
})

function createTask(content){

}

playButton.addEventListener('click', ()=>{

})
