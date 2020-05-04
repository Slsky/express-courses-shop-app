const fs = require('fs')
const path = require('path')

fs.writeFile(
    path.resolve(__dirname, '..', 'data', 'courses.json'),
    JSON.stringify([]),
    'utf8',
    (err) => {
        if (err) throw err
        console.log('File is writed')
    }
)

// module.exports = {
//     add
// }