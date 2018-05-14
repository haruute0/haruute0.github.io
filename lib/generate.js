const nunjucks = require('nunjucks')
const fs = require('fs')
const curYear = (new Date()).getFullYear().toString()

fs.writeFileSync(
    'out/index.html',
    nunjucks.render(
        'templates/index.nj', {
            curYear
        }
      )
)