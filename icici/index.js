const fs = require('fs')

const samples = require('./solids.json')

const arranged = samples.sort(function(a,b) {
  const aL = a.id.length
  const bL = b.id.length
  const aId = a.id.substring(4,aL)
  const bId = b.id.substring(4,bL)
  return parseInt(aId,10) - parseInt(bId,10)
})

fs.writeFileSync('samples1.json', JSON.stringify(arranged))
