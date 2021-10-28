const cards = document.querySelectorAll('.card')
const modal = document.getElementById('myModal')
const closeModal = document.querySelector('.close')
const play = document.querySelector('.btn-play')

// Modal pops-up when page loads
window.onload = () => {
    modal.style.display = 'block'
}

// Modal disappears when cross is clicked on
closeModal.onclick = () => {
    modal.style.display = 'none'
}


// Generates a random number between 0 and the length of 'numbers'
const randomIndex = (nb) => {
    return Math.floor(Math.random() * nb)
}

// Reveals the text of the card when clicked on
// Leaves the cards revealed if a pair is formed
// If not, hides all the cards
let numbersRevealed = []
const revealText = (element) => {
    element.className = 'card textRevealed'
    numbersRevealed.push(element.textContent)
    for (let i = 0; i < numbersRevealed.length - 1; i++) {
        if (numbersRevealed[i] + element.textContent === '11' ||
            numbersRevealed[i] + element.textContent === '22' ||
            numbersRevealed[i] + element.textContent === '33' ||
            numbersRevealed[i] + element.textContent === '44' ||
            numbersRevealed[i] + element.textContent === '55' ||
            numbersRevealed[i] + element.textContent === '66'
            ) {
            numbersRevealed = []
        } else {
            setTimeout(() => {
                cards.forEach(card => {
                     card.className = 'card textHidden'
                 }) 
            }, 700)
            numbersRevealed = []
        }
    }
}

// Code for the play button -> Should start the game when clicked on
play.addEventListener('click', () => console.log('Hey'))

// Assigns a random number to each card so that it creates 6 pairs
const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

cards.forEach(card => {
    const index = randomIndex(numbers.length)
    const number = numbers[index]
    card.textContent = number
    numbers.splice(index, 1)
})

// Assigns the attribute 'onclick' and hides the number of each card after 5 seconds
setTimeout(() => {
   cards.forEach(card => {
        card.className = 'card textHidden'
        card.setAttribute('onclick', 'revealText(this)')
    }) 
}, 5000)
