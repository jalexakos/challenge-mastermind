# Challenge Mastermind

## Live Version

Check out the live version of my game [here](https://challenge-mastermind-game.herokuapp.com/).
## To Run

Run `npm install` to install all dependencies.

Run `npm start` to run on a local server (generally http://localhost:3000/).

Refresh the page to reset the game (this will generate a completely new number).

## Thought Process / Build Philosophy

My build philosophy had four stages:

1. Build basic functionality
2. Sharpen up UI
3. Add more features
4. Refactor code for efficiency

My thought process was simple: I imagined the game as a basic web game. If someone showed up to my page without any previous knowledge of it, how would they learn what the game is and how to play? That informed the features I added, like a home page and a "How It Works" page. My hope is that someone random could happen upon it and use it without issue.

That same thought process guided how I structured the user interface and which features I added. I wanted the page to look good and be easily useable. I also figured that someone might get bored of the basic features of the game. What if they could increase or decrease the difficulty level by changing the number of random numbers they would be guessing against, and how many guesses they could use? That drove me to add user adjustment capabilities for both of those aspects of the game.

Finally, I tried to refine my code by making elements more efficient. Specific to React as a web framework, I wanted to make any feature I used frequently into a re-usable component, if possible. This makes the final code simpler, and means future tweaks are easier to implement (as I can make changes in one place rather than seven, for example).

## Further Improvements

Some areas I would like to explore with this project:

* Making it mobile friendly
    * Making the game accessible on smartphones is the next, biggest step. I would need to adjust the layout significantly to make it functional and easy to use.
* Refactor Play Component
    * The Play component is the heart of this project. Unsurprisingly, it has the longest code. I think there are a few spaces where I can tighten things up. For example, the `compareNums` function was a challenge to build, though it was a success. There are places where I can sharpen up the logic to improve efficiency, as well as spots where I can clean up the code with simple functions.