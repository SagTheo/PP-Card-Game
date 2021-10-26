const cards = document.querySelectorAll('div:not(#container)')

const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

// Generates a random number between 0 and the length of 'numbers'
const randomIndex = (nb) => {
    return Math.floor(Math.random() * nb)
}

// Reveals the text of the card when clicked on
const revealText = (element) => {
    element.style.color = 'black'
}

// Assigns a random number to each card so that it creates 6 pairs
cards.forEach(card => {
    const index = randomIndex(numbers.length)
    const number = numbers[index]
    card.textContent = number
    numbers.splice(index, 1)
})

// Assigns the attribute 'onclick' and hides the number of each card after 5 seconds
setTimeout(() => {
   cards.forEach(card => {
        card.className = 'textHidden'
        card.setAttribute('onclick', 'revealText(this)')
    }) 
}, 5000)
