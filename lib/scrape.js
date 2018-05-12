const fs = require('fs')
var Feed = require('rss-to-json')

Feed.load('https://medium.com/feed/@haruute', function(err, rss){
    fs.writeFileSync('out/static/data.json', JSON.stringify(rss))
});
