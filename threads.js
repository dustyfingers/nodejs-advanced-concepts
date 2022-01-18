const crypto = require('crypto');

const start = Date.now();

// do expensive work (compute hash)
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    const end = Date.now();
    console.log(`start 1: ${start}`);
    console.log(`end 1: ${end}`);
    console.log(`diff 1: ${end - start}`);
});


// note the start times for these two separate calls to pbkdf2() are the EXACT SAME TICK!!! (often)
crypto.pbkdf2('x', 'z', 100000, 512, 'sha512', () => {
    const end = Date.now();
    console.log(`start 2: ${start}`);
    console.log(`end 2: ${end}`);
    console.log(`diff 2: ${end - start}`);
});

// this would not possible if node was truly single threaded...
// so whats the deal?

