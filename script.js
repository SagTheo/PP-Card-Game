const cards = document.querySelectorAll('.card')
const modal = document.getElementById('myModal')
const closeModal = document.querySelector('.close')
const play = document.querySelector('.btn-play')
const losses = document.querySelector('.losses')

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
let attempts = 0
let nbLosses = JSON.parse(losses.textContent)

const revealText = (element) => {
    element.classList.remove('textHidden')
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
                     card.classList.add('textHidden')
                 }) 
            }, 600)
            numbersRevealed = []
            attempts++
        }
    }
    // When player loses
    if (attempts === 3) {
        console.log('You lost') // Display the message thanks to a modal or a pop-up
        nbLosses++
        losses.textContent = nbLosses
        attempts = 0
        play.disabled = false

        cards.forEach(card => {
            card.textContent = ''
            card.removeAttribute('onclick')
        })
    }

    // When game over
    if (nbLosses === 3) {
        console.log('Game Over') // Display the message thanks to a modal or a pop-up
        losses.textContent = '0'
    }
}


// Starts the game when play button is clicked
play.addEventListener('click', () => {
    // Assigns a random number to each card so that it creates 6 pairs
    const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

    cards.forEach(card => {
        const index = randomIndex(numbers.length)
        const number = numbers[index]
        card.textContent = number
        numbers.splice(index, 1)
        card.classList.remove('textHidden')
    })

    // Assigns the attribute 'onclick' and hides the number of each card after 5 seconds
    setTimeout(() => {
    cards.forEach(card => {
            card.classList.add('textHidden')
            card.setAttribute('onclick', 'revealText(this)')
            play.disabled = true
        }) 
    }, 5000)
})

