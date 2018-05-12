const Mustache = require('mustache')
const fs = require('fs')
const posts = require('../out/static/data.json')
const siteInfo = require('../out/static/siteInfo.json')

fs.writeFileSync(
    'out/index.html',
    Mustache.render(fs.readFileSync('templates/main.html').toString(), { 
        posts, 
        siteInfo
    })
)