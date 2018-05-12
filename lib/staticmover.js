const ncp = require('ncp').ncp

ncp('static', 'out/static', err => {
    if (err) {
        console.error(err)
    }
})