# PP-Card-Game

Features to implement:
    -adding a modal or a pop-up when the page loads containing the rules of the game
    -adding a button that allows to play another game
    -adding a counter that tracks the number of wins
    -adding a message when the player wins
        -and counter++
    -adding a limited number of attempts before player loses
    -adding a message when the player loses(has used all of his attempts)
    -adding a limited number of losses before game over
    -adding a message when game over
        -and counter reset to zero
    -styling the cards and the background



Difficulties encountered:

-assigning a number to each card randomly so that it creates 6 pairs:
    -sorted out: used an array for the numbers, a function that generates a random index, and the splice() method to update
                 the array as each number is assigned to a card

-letting the cards revealed if a pair is formed, hiding them again if not:
    -sorted out: used an array to store the first card that is clicked on, then a for loop to check if a pair has been    
                 formed when player clicks on a second card. If it is not the case, then a setTimeout() function resets the class of each card to textHidden