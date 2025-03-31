document.addEventListener("DOMContentLoaded", function() {

    const hours = new Date().getHours() // get the current hour
    
    const isMorning = hours >= 4 && hours < 12 // is it morning?
    const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
    const isEvening = hours >= 17 || hours < 4 // is it evening?
    
let message = "";

if (isMorning) {
    message = "Good morning! Have a great start to your day!";
} else if (isAfternoon) {
    message = "Good afternoon! Keep pushing forward!";
} else if (isEvening) {
    message = "Good evening! Time to relax and get in bed.";
}
document.getElementById("welcome").innerText = message;
});

// keeping the secret message
localStorage.setItem("It's a secret to everybody.", "Here, take this. It's dangerous to go alone!");
//carousel
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

setInterval(() => {
    currentImage += 1
    showImages()
}, 3000)

const buttonCarouselPrev = document.getElementById('prev')
const buttonCarouselNext = document.getElementById('next')

buttonCarouselNext.addEventListener('click', () => {
    currentImage += 1
    showImages()
})

buttonCarouselPrev.addEventListener('click',()=>{
    currentImage -= 1
    showImages()
})
//todo list

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const todoButton = document.getElementById('todo')
const inputTodo = document.getElementById('new-todo')
const todoList = document.getElementById('listaTodo')

const renderTodos = () => {
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)
    });
}
todoButton.addEventListener('click', ()=>{
    // Add a new item to the list
    todos.push({ text: inputTodo.value, completed: false })
    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))
    // Clear the li's before we recreate them
    todoList.innerHTML = ''
    renderTodos()
})

renderTodos()

//POKEMON HOMEWORK

const getRandomPokemon = async()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    const response = await fetch(url)   
    const json = await response.json()
    return json
}
const renderPokemon = async(pokemonParam)=>{
    console.log(pokemonParam)
    //create element img
    const img = document.createElement('img')
    //insert data to the element img
    img.src = pokemonParam.sprites.front_default
    img.alt = pokemonParam.name
    //set the img to the DOM at the last div that was created
    const pokemonElement = document.getElementById('pokemon')
    pokemonElement.append(img)
}

const initPage = async () => {
    const randomPokemon = await getRandomPokemon()
    renderPokemon(randomPokemon)
}
initPage()