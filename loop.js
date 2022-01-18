
// invoke node runtime to run program (usually index.js, server.js)
// node myFile.js

// * lifecycle of a node application


// these arrays represent any pending operations used by nodejs, used below
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];


// inside of nodejs, something like this eventually happens
// this represents the contents of the js file actually being passed into node
myFile.runContents()

// if this returns false, we exit to the console below
function shouldConutinue() {
    // check one: any pending setTimeout, setInterval, setImmediate
    // check two: any pending OS tasks? like server listening to port
    // check three: any pending long running operations? (fs module)

    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// every time the body of this while loop runs, that is a 'tick'
while (shouldConutinue()) {

    // 1) node checks for pending timers and sees if any functions are ready to be called (setTimeout, setInterval)
    
    // 2) node looks at pending os tasks and pending operations and calls relevant callbacks

    // 3) node pauses execution. continue when...
    // - a new pending os task is done
    // - a new pending operation is done
    // - a timer is about to complete

    // 4) look at pendingTimers. call any setImmediate

    // 5) handle any 'close' events

}

// exit back to terminal