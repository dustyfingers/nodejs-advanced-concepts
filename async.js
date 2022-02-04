const https = require('https')



// res is not like in axios etc. its not an object that represents the entire response
// its an object that emits events as we receive data from google's server
const fetchGoogle = () => {

    const start = Date.now()
    console.log(start)

    https
    .request('https://www.google.com', res => {

        res.on('data', () => {})

        res.on('end', () => {
            console.log('request time')
            console.log(`${Date.now() - start}ms`)
        })

    })
    .end()

}

// these all happen at essentially the same time!
// non blocking!
fetchGoogle()
fetchGoogle()
fetchGoogle()
fetchGoogle()
fetchGoogle()
fetchGoogle()
fetchGoogle()