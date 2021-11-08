# PP-Card-Game

Features to implement:
    -adding a button that starts the game and allows to play another one - done
    -adding a counter that tracks the number of wins - done
    -adding a message when the player wins - done
        -and counter++ - done
        -and remove the possibility to click on cards - done
    -adding a limited number of attempts before player loses(3) - done 
    -adding a counter that tracks the number of losses - done
    -adding a message when the player loses(has used all of his attempts) - done
        -and counter of losses++ - done
    -adding a limited number of losses before game over(3) - done
    -adding a message when game over - done
        -and counter reset to zero - done 
    -styling the cards and the background - done
    -making a french version of the app(toggle button?)



Difficulties encountered:

-assigning a number to each card randomly so that it creates 6 pairs:
    -sorted out: used an array for the numbers, a function that generates a random index, and the splice() method to update
                 the array as each number is assigned to a card

-letting the cards revealed if a pair is formed, hiding them again if not:
    -sorted out: used an array to store the first card that is clicked on, then a for loop to check if a pair has been    
                 formed when player clicks on a second card. If it is not the case, then a setTimeout() function resets the class of each card to textHidden

-displaying a message for the rules, when the player wins or lose or when it is game over:
    -used Bootstrap modal at first --> broke the HTML code 
        -sorted out: created a modal with CSS (a div that takes the whole page and another inside the first one for the
                     content of the modal), and set its display to 'block' or 'none' when needed

-fixing a bug: even after revealing a card, player could still click on it, adding the number of that card to the array
               'numbersRevealed' and that would create a bug when the player clicked on other cards
                    sorted out: removed the attribute 'onclick' when player clicked on a card and therefore had to reset
                                that same attribute when player didn't find a pair
                                --> created another bug: when player lost, the attribute 'onclick' got removed and then 
                                    reset again
                                        -sorted out: simply put the code that removes the attribute 'onclick' (when player 
                                                     loses) in a setTimeout function so that the removal of that attribute
                                                     is delayed after it is re-added
                                                        