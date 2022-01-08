
// invoke node runtime to run program (usually index.js, server.js)
// node myFile.js

// * lifecycle of a node application

// inside of nodejs, something like this eventually happens
// this represents the contents of the js file actually being passed into node
myFile.runContents()

// if this returns false, we exit to the console below
function shouldConutinue() {

}

// every time the body of this while loop runs, that is a 'tick'
while (shouldConutinue()) {

}

// exit back to terminal