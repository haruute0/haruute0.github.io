const Mustache = require('mustache')
const ncp = require('ncp').ncp
const fs = require('fs')
const posts = require('../out/data.json')

ncp('static', 'out/static', err => {
    if (err) {
        console.error(err)
    }
})

fs.writeFileSync(
    'out/index.html',
    Mustache.render(fs.readFileSync('templates/main.html').toString(), { posts })
)