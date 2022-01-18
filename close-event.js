// a readstream is an example of a object that events a 'close' event

// doesnt actually work
readStream.on('close', () => console.log('clean up code'));