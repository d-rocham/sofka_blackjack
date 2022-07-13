# sofka_blackjack
A very simple implementation of the blackjack game to review Vanilla JS. SofkaU homework.

## Project description
This blackjack implementation is composed of:
* 1 player
* 1 dealer
* 1 deck of 52 cards, made with 4 suits.

The rules for this game are from [this website](https://bicyclecards.com/how-to-play/blackjack/), as well as from the particular requirements asked by the mentor:

1. The player places an initial bet.
2. Player receives 2 cards from the card bank.
3. Dealer receives 2 cards from the card bank.
4. The player has the option to **hit** (ask for an aditional card) or **stand** (finish his turn as is), depending on the sum of his cards. 
5. The dealer cannot decide on whether he hits or stands. Instead, if his hand sum is >= 17, he must stand (and the round would be over, as explained below). Otherwise, he must keep taking cards until this condition is met.
6. The game finishes when:
	1. The dealer gets a hand whose value is higher than 21. **¨The player wins**.
	2. The player gets a hand value equal to 21. **The player wins**.
	3. The dealer has to stay,  in wich case **the winner is whohever has the closes value to 21**.
7. To handle the bets:
	1. If the player wins, he earns is doubled bet + the value of the cards in his hand.
	2. If the dealer wins, he gets the player's bet.

## Program structure
>todo...
